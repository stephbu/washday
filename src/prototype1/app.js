const STORAGE_KEY = "washday_prototype1";
const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const state = {
  tickers: [],
  events: [],
  month: new Date(),
};

const tickerForm = document.getElementById("tickerForm");
const tickerInput = document.getElementById("tickerInput");
const tickerList = document.getElementById("tickerList");
const eventForm = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");
const eventTicker = document.getElementById("eventTicker");
const eventKind = document.getElementById("eventKind");
const eventSubtype = document.getElementById("eventSubtype");
const eventDate = document.getElementById("eventDate");
const eventLabel = document.getElementById("eventLabel");
const monthLabel = document.getElementById("monthLabel");
const calendarGrid = document.getElementById("calendarGrid");

const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");
const todayBtn = document.getElementById("todayBtn");
const resetBtn = document.getElementById("resetBtn");
const exportBtn = document.getElementById("exportBtn");

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    state.tickers = parsed.tickers || [];
    state.events = parsed.events || [];
  } catch (err) {
    console.warn("Failed to load state", err);
  }
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ tickers: state.tickers, events: state.events })
  );
}

function toDate(value) {
  return new Date(`${value}T00:00:00`);
}

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

function normalizeTicker(value) {
  return value.trim().toUpperCase();
}

function addTicker(value) {
  const ticker = normalizeTicker(value);
  if (!ticker) return;
  if (state.tickers.includes(ticker)) return;
  state.tickers.push(ticker);
  saveState();
  renderTickers();
  renderEventTickerOptions();
}

function removeTicker(ticker) {
  state.tickers = state.tickers.filter((t) => t !== ticker);
  state.events = state.events.filter((e) => e.ticker !== ticker);
  saveState();
  renderTickers();
  renderEventTickerOptions();
  renderEvents();
  renderCalendar();
}

function addEvent(payload) {
  const event = {
    id: crypto.randomUUID(),
    ticker: payload.ticker,
    kind: payload.kind,
    subtype: payload.subtype || null,
    date: payload.date,
    label: payload.label || "",
  };
  state.events.push(event);
  saveState();
  renderEvents();
  renderCalendar();
}

function updateEvent(id, updates) {
  const idx = state.events.findIndex((e) => e.id === id);
  if (idx === -1) return;
  state.events[idx] = { ...state.events[idx], ...updates };
  saveState();
  renderEvents();
  renderCalendar();
}

function deleteEvent(id) {
  state.events = state.events.filter((e) => e.id !== id);
  saveState();
  renderEvents();
  renderCalendar();
}

function renderTickers() {
  tickerList.innerHTML = "";
  if (!state.tickers.length) {
    tickerList.innerHTML = '<span class="muted">No tickers yet.</span>';
    return;
  }
  state.tickers.forEach((ticker) => {
    const chip = document.createElement("div");
    chip.className = "chip";
    chip.innerHTML = `
      <span>${ticker}</span>
      <button type="button" data-remove="${ticker}">x</button>
    `;
    tickerList.appendChild(chip);
  });
  tickerList.querySelectorAll("button[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => removeTicker(btn.dataset.remove));
  });
}

function renderEventTickerOptions() {
  eventTicker.innerHTML = "";
  if (!state.tickers.length) {
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = "Add a ticker first";
    eventTicker.appendChild(opt);
    eventTicker.disabled = true;
    return;
  }
  eventTicker.disabled = false;
  state.tickers.forEach((ticker) => {
    const opt = document.createElement("option");
    opt.value = ticker;
    opt.textContent = ticker;
    eventTicker.appendChild(opt);
  });
}

function renderEvents() {
  eventList.innerHTML = "";
  if (!state.events.length) {
    eventList.innerHTML = '<span class="muted">No events yet.</span>';
    return;
  }
  state.events
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date))
    .forEach((event) => {
      const card = document.createElement("div");
      card.className = "event-card";
      card.dataset.id = event.id;
      const label = event.label ? `<strong>${event.label}</strong>` : "";
      const kindLabel = event.kind === "div" ? "Dividend" : "Acquisition";
      const subtypeLabel = event.kind === "acq" ? event.subtype : "";

      card.innerHTML = `
        <div class="meta">
          <span>${event.ticker}</span>
          <span>${kindLabel}</span>
          ${subtypeLabel ? `<span>${subtypeLabel}</span>` : ""}
          <span>${event.date}</span>
        </div>
        ${label}
        <div class="event-actions">
          <button type="button" data-edit="${event.id}" class="ghost">Edit</button>
          <button type="button" data-delete="${event.id}" class="danger">Delete</button>
        </div>
      `;

      eventList.appendChild(card);
    });

  eventList.querySelectorAll("button[data-delete]").forEach((btn) => {
    btn.addEventListener("click", () => deleteEvent(btn.dataset.delete));
  });

  eventList.querySelectorAll("button[data-edit]").forEach((btn) => {
    btn.addEventListener("click", () => renderInlineEditor(btn.dataset.edit));
  });
}

function renderInlineEditor(id) {
  const event = state.events.find((e) => e.id === id);
  if (!event) return;

  const card = document.createElement("div");
  card.className = "event-card";

  card.innerHTML = `
    <label>
      Ticker
      <select data-field="ticker">
        ${state.tickers.map((t) => `<option value="${t}">${t}</option>`).join("")}
      </select>
    </label>
    <label>
      Event type
      <select data-field="kind">
        <option value="acq">Acquisition</option>
        <option value="div">Dividend</option>
      </select>
    </label>
    <label>
      Acquisition subtype
      <select data-field="subtype">
        <option value="rsu">RSU vest/settle</option>
        <option value="espp">ESPP purchase</option>
        <option value="option">Option exercise</option>
      </select>
    </label>
    <label>
      Date
      <input type="date" data-field="date" required />
    </label>
    <label>
      Label
      <input data-field="label" />
    </label>
    <div class="event-actions">
      <button type="button" data-save="${id}" class="primary">Save</button>
      <button type="button" data-cancel class="ghost">Cancel</button>
    </div>
  `;

  const existing = eventList.querySelector(`[data-id='${id}']`);
  if (existing) {
    eventList.replaceChild(card, existing);
  }

  card.querySelector("[data-field='ticker']").value = event.ticker;
  card.querySelector("[data-field='kind']").value = event.kind;
  card.querySelector("[data-field='subtype']").value = event.subtype || "rsu";
  card.querySelector("[data-field='date']").value = event.date;
  card.querySelector("[data-field='label']").value = event.label;

  const kindSelect = card.querySelector("[data-field='kind']");
  const subtypeSelect = card.querySelector("[data-field='subtype']");
  const toggleSubtype = () => {
    subtypeSelect.disabled = kindSelect.value === "div";
  };
  toggleSubtype();
  kindSelect.addEventListener("change", toggleSubtype);

  card.querySelector("button[data-save]").addEventListener("click", () => {
    updateEvent(id, {
      ticker: card.querySelector("[data-field='ticker']").value,
      kind: kindSelect.value,
      subtype: kindSelect.value === "div" ? null : subtypeSelect.value,
      date: card.querySelector("[data-field='date']").value,
      label: card.querySelector("[data-field='label']").value,
    });
  });

  card.querySelector("button[data-cancel]").addEventListener("click", () => {
    renderEvents();
  });
}

function buildRiskMap() {
  const riskMap = new Map();
  state.events.forEach((event) => {
    const base = toDate(event.date);
    const start = new Date(base);
    start.setDate(start.getDate() - 30);
    const end = new Date(base);
    end.setDate(end.getDate() + 30);

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const key = formatDate(d);
      riskMap.set(key, (riskMap.get(key) || 0) + 1);
    }
  });
  return riskMap;
}

function renderCalendar() {
  calendarGrid.innerHTML = "";
  const month = new Date(state.month.getFullYear(), state.month.getMonth(), 1);
  const monthStart = new Date(month);
  const monthEnd = new Date(month.getFullYear(), month.getMonth() + 1, 0);
  const riskMap = buildRiskMap();

  monthLabel.textContent = month.toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });

  DAY_NAMES.forEach((name) => {
    const cell = document.createElement("div");
    cell.className = "day-name";
    cell.textContent = name;
    calendarGrid.appendChild(cell);
  });

  const startOffset = monthStart.getDay();
  const daysInView = 42;
  const startDate = new Date(monthStart);
  startDate.setDate(startDate.getDate() - startOffset);

  for (let i = 0; i < daysInView; i += 1) {
    const current = new Date(startDate);
    current.setDate(startDate.getDate() + i);
    const key = formatDate(current);
    const cell = document.createElement("div");
    cell.className = "day";
    cell.setAttribute("aria-label", key);

    if (current.getMonth() !== month.getMonth()) {
      cell.classList.add("muted");
    }

    const riskCount = riskMap.get(key) || 0;
    if (riskCount > 0) {
      cell.classList.add("risk");
    }
    if (riskCount > 1) {
      cell.classList.add("overlap");
    }

    const eventsToday = state.events.filter((event) => event.date === key);
    cell.innerHTML = `
      <span class="date">${current.getDate()}</span>
      <div class="markers"></div>
    `;

    const markers = cell.querySelector(".markers");
    eventsToday.forEach((event) => {
      const dot = document.createElement("span");
      dot.className = "dot event";
      dot.title = `${event.ticker} ${event.kind === "div" ? "Dividend" : "Acquisition"}`;
      markers.appendChild(dot);
    });

    calendarGrid.appendChild(cell);
  }
}

function handleKindChange() {
  eventSubtype.disabled = eventKind.value === "div";
}

function resetAll() {
  if (!confirm("Reset all data?")) return;
  state.tickers = [];
  state.events = [];
  saveState();
  renderTickers();
  renderEventTickerOptions();
  renderEvents();
  renderCalendar();
}

function exportData() {
  const data = JSON.stringify({ tickers: state.tickers, events: state.events }, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "washday-prototype1.json";
  a.click();
  URL.revokeObjectURL(url);
}

function init() {
  loadState();
  renderTickers();
  renderEventTickerOptions();
  renderEvents();
  renderCalendar();
  handleKindChange();
}

tickerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTicker(tickerInput.value);
  tickerInput.value = "";
});

eventForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!eventTicker.value) return;
  if (!eventDate.value) return;
  addEvent({
    ticker: eventTicker.value,
    kind: eventKind.value,
    subtype: eventKind.value === "div" ? null : eventSubtype.value,
    date: eventDate.value,
    label: eventLabel.value.trim(),
  });
  eventDate.value = "";
  eventLabel.value = "";
});

eventKind.addEventListener("change", handleKindChange);
prevMonth.addEventListener("click", () => {
  state.month = new Date(state.month.getFullYear(), state.month.getMonth() - 1, 1);
  renderCalendar();
});
nextMonth.addEventListener("click", () => {
  state.month = new Date(state.month.getFullYear(), state.month.getMonth() + 1, 1);
  renderCalendar();
});
todayBtn.addEventListener("click", () => {
  state.month = new Date();
  renderCalendar();
});
resetBtn.addEventListener("click", resetAll);
exportBtn.addEventListener("click", exportData);

init();
