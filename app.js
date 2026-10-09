"use strict";
const { useState, useEffect, useMemo, useRef } = React;
function svgIcon(children) {
    return function IconCmp(props) {
        const { size = 18, color, style, onClick, title } = props || {};
        return React.createElement("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color || "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: style,
            onClick: onClick,
        }, title ? React.createElement("title", null, title) : null, children);
    };
}
const Plus = svgIcon(React.createElement("path", { d: "M12 5v14M5 12h14" }));
const X = svgIcon([
    React.createElement("path", { key: 1, d: "M18 6 6 18" }),
    React.createElement("path", { key: 2, d: "M6 6l12 12" }),
]);
const Pencil = svgIcon([
    React.createElement("path", { key: 1, d: "M12 20h9" }),
    React.createElement("path", { key: 2, d: "M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" }),
]);
const Trash2 = svgIcon([
    React.createElement("path", { key: 1, d: "M3 6h18" }),
    React.createElement("path", { key: 2, d: "M8 6V4h8v2" }),
    React.createElement("path", { key: 3, d: "M19 6l-1 14H6L5 6" }),
    React.createElement("path", { key: 4, d: "M10 11v6" }),
    React.createElement("path", { key: 5, d: "M14 11v6" }),
]);
const Download = svgIcon([
    React.createElement("path", { key: 1, d: "M12 3v12" }),
    React.createElement("path", { key: 2, d: "M7 10l5 5 5-5" }),
    React.createElement("path", { key: 3, d: "M5 21h14" }),
]);
const Save = svgIcon([
    React.createElement("path", { key: 1, d: "M6 4h10l4 4v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" }),
    React.createElement("path", { key: 2, d: "M8 4v5h7V4" }),
    React.createElement("path", { key: 3, d: "M8 14h8v6H8Z" }),
]);
const ChevronRight = svgIcon(React.createElement("path", { d: "M9 6l6 6-6 6" }));
const Filter = svgIcon(React.createElement("path", { d: "M4 5h16l-6 7v6l-4-2v-4Z" }));
const Search = svgIcon([
    React.createElement("circle", { key: 1, cx: 11, cy: 11, r: 7 }),
    React.createElement("path", { key: 2, d: "M21 21l-4.3-4.3" }),
]);
const CheckCircle2 = svgIcon([
    React.createElement("circle", { key: 1, cx: 12, cy: 12, r: 9 }),
    React.createElement("path", { key: 2, d: "M8 12.5l2.5 2.5L16 9" }),
]);
const ClipboardList = svgIcon([
    React.createElement("rect", { key: 1, x: 6, y: 4, width: 12, height: 16, rx: 2 }),
    React.createElement("rect", { key: 2, x: 9, y: 2, width: 6, height: 4, rx: 1 }),
    React.createElement("path", { key: 3, d: "M9 11h6M9 15h6" }),
]);
const LayoutDashboard = svgIcon([
    React.createElement("rect", { key: 1, x: 3, y: 3, width: 8, height: 8, rx: 1 }),
    React.createElement("rect", { key: 2, x: 13, y: 3, width: 8, height: 5, rx: 1 }),
    React.createElement("rect", { key: 3, x: 13, y: 10, width: 8, height: 11, rx: 1 }),
    React.createElement("rect", { key: 4, x: 3, y: 13, width: 8, height: 8, rx: 1 }),
]);
const HardHat = svgIcon([
    React.createElement("path", { key: 1, d: "M4 14a8 8 0 0 1 16 0" }),
    React.createElement("path", { key: 2, d: "M2 14h20" }),
    React.createElement("path", { key: 3, d: "M11 6V3h2v3" }),
]);
const Camera = svgIcon([
    React.createElement("path", { key: 1, d: "M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" }),
    React.createElement("circle", { key: 2, cx: 12, cy: 13.5, r: 3.5 }),
]);
const ImagePlus = svgIcon([
    React.createElement("rect", { key: 1, x: 3, y: 4, width: 18, height: 16, rx: 2 }),
    React.createElement("circle", { key: 2, cx: 9, cy: 10, r: 2 }),
    React.createElement("path", { key: 3, d: "M21 15l-5-5L6 20" }),
]);
const LOGO_SRC = "data:image/png;base64,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";
const CATEGORIAS = [
    "Uso de EPI",
    "Escavação e Escoramento",
    "Sinalização e Isolamento",
    "Espaço Confinado",
    "Movimentação de Máquinas e Equipamentos",
    "Ordem e Limpeza",
    "Ergonomia e Postura",
    "Ferramentas e Equipamentos",
    "Trabalho em Vala",
    "Outro",
];
const TIPOS = ["Risco", "Comportamento"];
const CONDICOES = ["Segura", "Insegura"];
const NIVEIS = ["Baixo", "Médio", "Alto", "Crítico"];
const STATUSES = ["Aberto", "Em andamento", "Concluído"];
const DEFAULT_EMPRESAS = ["Construtora Rio Claro", "Saneal Engenharia"];
const NIVEL_COLOR = {
    Baixo: "var(--success)",
    Médio: "var(--warning)",
    Alto: "var(--accent)",
    Crítico: "var(--danger)",
};
const STATUS_COLOR = {
    Aberto: "var(--danger)",
    "Em andamento": "var(--warning)",
    Concluído: "var(--success)",
};
function todayISO() {
    const d = new Date();
    const off = d.getTimezoneOffset();
    return new Date(d.getTime() - off * 60000).toISOString().slice(0, 10);
}
function fmtBR(iso) {
    if (!iso)
        return "-";
    const [y, m, d] = iso.split("-");
    if (!y || !m || !d)
        return iso;
    return `${d}/${m}/${y}`;
}
function weekNumber(iso) {
    if (!iso)
        return "";
    const date = new Date(iso + "T00:00:00");
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
}
function emptyForm(empresasList, tecnico) {
    return {
        empresa: empresasList[0] || "",
        colaborador: "",
        funcao: "",
        obra: "",
        data: todayISO(),
        tipo: "Risco",
        categoria: CATEGORIAS[0],
        condicao: "Insegura",
        descricao: "",
        nivel: "Médio",
        acao: "",
        responsavelAcao: "",
        prazo: "",
        status: "Aberto",
        tecnico: tecnico || "",
    };
}
function App() {
    const [ready, setReady] = useState(false);
    const [records, setRecords] = useState([]);
    const [empresasList, setEmpresasList] = useState(DEFAULT_EMPRESAS);
    const [tab, setTab] = useState("novo");
    const [form, setForm] = useState(() => emptyForm(DEFAULT_EMPRESAS, ""));
    const [editingId, setEditingId] = useState(null);
    const [addingEmpresa, setAddingEmpresa] = useState(false);
    const [novaEmpresa, setNovaEmpresa] = useState("");
    const [errors, setErrors] = useState({});
    const [toast, setToast] = useState("");
    const [deletingId, setDeletingId] = useState(null);
    const [search, setSearch] = useState("");
    const [filtroEmpresa, setFiltroEmpresa] = useState("Todas");
    const [filtroStatus, setFiltroStatus] = useState("Todos");
    const [filtroNivel, setFiltroNivel] = useState("Todos");
    const [showFiltros, setShowFiltros] = useState(false);
    const [painelDataIni, setPainelDataIni] = useState(() => todayISO());
    const [painelDataFim, setPainelDataFim] = useState(() => todayISO());
    const [gerandoRelatorio, setGerandoRelatorio] = useState(false);
    const [fotos, setFotos] = useState([]);
    const [fotoPreview, setFotoPreview] = useState(null);
    const [fotoLocal, setFotoLocal] = useState("");
    const [fotoObs, setFotoObs] = useState("");
    const [fotoData, setFotoData] = useState(() => todayISO());
    const [fotoDataIni, setFotoDataIni] = useState(() => todayISO());
    const [fotoDataFim, setFotoDataFim] = useState(() => todayISO());
    const [gerandoRelatorioFotos, setGerandoRelatorioFotos] = useState(false);
    const [fotoAmpliada, setFotoAmpliada] = useState(null);
    const toastTimer = useRef(null);
    const topRef = useRef(null);
    const fotoInputRef = useRef(null);
    useEffect(() => {
        (async () => {
            let loadedEmpresas = DEFAULT_EMPRESAS;
            let loadedTecnico = "";
            try {
                const r = await window.storage.get("apontamentos:records", false);
                if (r && r.value) {
                    const parsed = JSON.parse(r.value);
                    const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000;
                    const kept = parsed.filter((rec) => {
                        const base = rec.criadoEm || (rec.data ? rec.data + "T00:00:00" : null);
                        const ts = base ? new Date(base).getTime() : NaN;
                        return isNaN(ts) ? true : ts >= cutoff;
                    });
                    setRecords(kept);
                    if (kept.length !== parsed.length) {
                        window.storage.set("apontamentos:records", JSON.stringify(kept), false).catch(() => { });
                    }
                }
            }
            catch (e) { }
            try {
                const rf = await window.storage.get("apontamentos:fotos", false);
                if (rf && rf.value) {
                    const parsedF = JSON.parse(rf.value);
                    const cutoffF = Date.now() - 30 * 24 * 60 * 60 * 1000;
                    const keptF = parsedF.filter((rec) => {
                        const base = rec.criadoEm || (rec.data ? rec.data + "T00:00:00" : null);
                        const ts = base ? new Date(base).getTime() : NaN;
                        return isNaN(ts) ? true : ts >= cutoffF;
                    });
                    setFotos(keptF);
                    if (keptF.length !== parsedF.length) {
                        window.storage.set("apontamentos:fotos", JSON.stringify(keptF), false).catch(() => { });
                    }
                }
            }
            catch (e) { }
            try {
                const e2 = await window.storage.get("apontamentos:empresas", false);
                if (e2 && e2.value) {
                    loadedEmpresas = JSON.parse(e2.value);
                    setEmpresasList(loadedEmpresas);
                }
            }
            catch (e) { }
            try {
                const t = await window.storage.get("apontamentos:tecnico", false);
                if (t && t.value)
                    loadedTecnico = t.value;
            }
            catch (e) { }
            setForm(emptyForm(loadedEmpresas, loadedTecnico));
            setReady(true);
        })();
    }, []);
    useEffect(() => {
        if (!ready)
            return;
        window.storage.set("apontamentos:records", JSON.stringify(records), false).catch(() => { });
    }, [records, ready]);
    useEffect(() => {
        if (!ready)
            return;
        window.storage.set("apontamentos:empresas", JSON.stringify(empresasList), false).catch(() => { });
    }, [empresasList, ready]);
    useEffect(() => {
        if (!ready)
            return;
        window.storage.set("apontamentos:fotos", JSON.stringify(fotos), false).catch(() => { });
    }, [fotos, ready]);
    function showToast(msg) {
        setToast(msg);
        clearTimeout(toastTimer.current);
        toastTimer.current = setTimeout(() => setToast(""), 2600);
    }
    function updateField(key, value) {
        setForm((f) => ({ ...f, [key]: value }));
        if (errors[key])
            setErrors((e) => ({ ...e, [key]: null }));
    }
    function validate() {
        const req = ["empresa", "colaborador", "descricao", "tecnico", "data"];
        const errs = {};
        req.forEach((k) => {
            if (!form[k] || !String(form[k]).trim())
                errs[k] = true;
        });
        setErrors(errs);
        return Object.keys(errs).length === 0;
    }
    function handleAddEmpresa() {
        const name = novaEmpresa.trim();
        if (!name)
            return;
        if (!empresasList.includes(name))
            setEmpresasList((l) => [...l, name]);
        updateField("empresa", name);
        setNovaEmpresa("");
        setAddingEmpresa(false);
    }
    function handleSave() {
        if (!validate()) {
            showToast("Preencha os campos obrigatórios destacados");
            return;
        }
        if (editingId) {
            setRecords((rs) => rs.map((r) => r.id === editingId ? { ...form, id: editingId, semana: weekNumber(form.data) } : r));
            showToast(`Apontamento #${editingId} atualizado`);
            setEditingId(null);
            setForm(emptyForm(empresasList, form.tecnico));
            setTab("registros");
        }
        else {
            const nextId = records.length ? Math.max(...records.map((r) => r.id)) + 1 : 1;
            const novo = { ...form, id: nextId, semana: weekNumber(form.data), criadoEm: new Date().toISOString() };
            setRecords((rs) => [novo, ...rs]);
            showToast(`Apontamento #${nextId} salvo`);
            window.storage.set("apontamentos:tecnico", form.tecnico, false).catch(() => { });
            setForm((f) => ({
                ...emptyForm(empresasList, f.tecnico),
                empresa: f.empresa,
                obra: f.obra,
                data: f.data,
            }));
        }
    }
    function handleEdit(rec) {
        setForm({ ...rec });
        setEditingId(rec.id);
        setTab("novo");
        setErrors({});
        if (topRef.current)
            topRef.current.scrollTop = 0;
    }
    function cancelEdit() {
        setEditingId(null);
        setForm(emptyForm(empresasList, form.tecnico));
        setErrors({});
    }
    function handleDelete(id) {
        if (deletingId !== id) {
            setDeletingId(id);
            setTimeout(() => setDeletingId((d) => (d === id ? null : d)), 3000);
            return;
        }
        setRecords((rs) => rs.filter((r) => r.id !== id));
        setDeletingId(null);
        showToast(`Apontamento #${id} excluído`);
    }
    function handleFotoFile(e) {
        const file = e.target.files && e.target.files[0];
        if (e.target)
            e.target.value = "";
        if (!file)
            return;
        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.onload = () => {
                const maxW = 1280;
                const scale = Math.min(1, maxW / img.width);
                const canvas = document.createElement("canvas");
                canvas.width = Math.round(img.width * scale);
                canvas.height = Math.round(img.height * scale);
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                const dataUrl = canvas.toDataURL("image/jpeg", 0.72);
                setFotoPreview(dataUrl);
            };
            img.onerror = () => showToast("N\u00e3o foi poss\u00edvel abrir a imagem");
            img.src = reader.result;
        };
        reader.onerror = () => showToast("N\u00e3o foi poss\u00edvel ler o arquivo");
        reader.readAsDataURL(file);
    }
    function handleSaveFoto() {
        if (!fotoPreview) {
            showToast("Tire ou selecione uma foto primeiro");
            return;
        }
        const nextId = fotos.length ? Math.max(...fotos.map((f) => f.id)) + 1 : 1;
        const nova = {
            id: nextId,
            foto: fotoPreview,
            local: fotoLocal.trim(),
            observacao: fotoObs.trim(),
            data: fotoData || todayISO(),
            criadoEm: new Date().toISOString(),
        };
        setFotos((fs) => [nova, ...fs]);
        showToast(`Foto #${nextId} salva`);
        setFotoPreview(null);
        setFotoLocal("");
        setFotoObs("");
        setFotoData(todayISO());
    }
    function handleDeleteFoto(id) {
        if (deletingId !== `foto-${id}`) {
            setDeletingId(`foto-${id}`);
            setTimeout(() => setDeletingId((d) => (d === `foto-${id}` ? null : d)), 3000);
            return;
        }
        setFotos((fs) => fs.filter((f) => f.id !== id));
        setDeletingId(null);
        showToast(`Foto #${id} exclu\u00edda`);
    }
    const filtered = useMemo(() => {
        return records.filter((r) => {
            if (filtroEmpresa !== "Todas" && r.empresa !== filtroEmpresa)
                return false;
            if (filtroStatus !== "Todos" && r.status !== filtroStatus)
                return false;
            if (filtroNivel !== "Todos" && r.nivel !== filtroNivel)
                return false;
            if (search.trim()) {
                const q = search.trim().toLowerCase();
                const hay = `${r.colaborador} ${r.descricao} ${r.categoria} ${r.obra}`.toLowerCase();
                if (!hay.includes(q))
                    return false;
            }
            return true;
        });
    }, [records, filtroEmpresa, filtroStatus, filtroNivel, search]);
    const painelRecords = useMemo(() => {
        return records.filter((r) => {
            if (!r.data)
                return true;
            if (painelDataIni && r.data < painelDataIni)
                return false;
            if (painelDataFim && r.data > painelDataFim)
                return false;
            return true;
        });
    }, [records, painelDataIni, painelDataFim]);
    const fotosFiltradas = useMemo(() => {
        return fotos.filter((f) => {
            if (!f.data)
                return true;
            if (fotoDataIni && f.data < fotoDataIni)
                return false;
            if (fotoDataFim && f.data > fotoDataFim)
                return false;
            return true;
        });
    }, [fotos, fotoDataIni, fotoDataFim]);
    const kpis = useMemo(() => {
        const total = painelRecords.length;
        const riscoAltoCritico = painelRecords.filter((r) => r.nivel === "Alto" || r.nivel === "Crítico").length;
        const inseguras = painelRecords.filter((r) => r.condicao === "Insegura").length;
        const abertas = painelRecords.filter((r) => r.status !== "Concluído").length;
        const concluidas = painelRecords.filter((r) => r.status === "Concluído").length;
        return { total, riscoAltoCritico, inseguras, abertas, concluidas };
    }, [painelRecords]);
    function countBy(key) {
        const map = {};
        painelRecords.forEach((r) => {
            map[r[key]] = (map[r[key]] || 0) + 1;
        });
        return Object.entries(map).sort((a, b) => b[1] - a[1]);
    }
    const porEmpresa = useMemo(() => countBy("empresa"), [painelRecords]);
    const porTipo = useMemo(() => countBy("tipo"), [painelRecords]);
    const porStatus = useMemo(() => countBy("status"), [painelRecords]);
    const porCategoria = useMemo(() => countBy("categoria"), [painelRecords]);
    const maxCount = (arr) => Math.max(1, ...arr.map((a) => a[1]));
    function chartToImage(type, labels, data, colors, titleText, opts) {
        opts = opts || {};
        return new Promise((resolve) => {
            const canvas = document.createElement("canvas");
            canvas.width = opts.width || 620;
            canvas.height = opts.height || 360;
            canvas.style.position = "fixed";
            canvas.style.left = "-9999px";
            canvas.style.top = "0";
            document.body.appendChild(canvas);
            const isPie = type === "pie" || type === "doughnut";
            const chart = new Chart(canvas, {
                type,
                data: {
                    labels,
                    datasets: [{
                        data,
                        backgroundColor: colors,
                        borderColor: isPie ? "#14181d" : undefined,
                        borderWidth: isPie ? 2 : 0,
                        borderRadius: type === "bar" ? 4 : 0,
                    }],
                },
                options: {
                    indexAxis: opts.horizontal ? "y" : "x",
                    responsive: false,
                    animation: false,
                    layout: { padding: 8 },
                    plugins: {
                        legend: { display: isPie, position: "right", labels: { color: "#333", font: { size: 11 } } },
                        title: { display: true, text: titleText, color: "#1F3864", font: { size: 15, weight: "bold" } },
                    },
                    scales: isPie ? undefined : {
                        x: { ticks: { color: "#333", font: { size: 10 } }, grid: { display: !opts.horizontal } },
                        y: { beginAtZero: true, ticks: { color: "#333", precision: 0, font: { size: 10 } } },
                    },
                },
            });
            setTimeout(() => {
                const url = canvas.toDataURL("image/png", 1.0);
                chart.destroy();
                document.body.removeChild(canvas);
                resolve(url);
            }, 80);
        });
    }
    async function buildDashboardCharts() {
        const palette = ["#2E5B9A", "#ff6a13", "#3dd68c", "#ffb020", "#ff5459", "#4ea1ff", "#7D6608", "#C0392B", "#9b59b6", "#16a085"];
        const empresaImg = await chartToImage("bar", porEmpresa.map((x) => x[0]), porEmpresa.map((x) => x[1]), palette, "Apontamentos por Empresa", { horizontal: true });
        const tipoImg = await chartToImage("pie", porTipo.map((x) => x[0]), porTipo.map((x) => x[1]), ["#ff5459", "#4ea1ff"], "Apontamentos por Tipo");
        const statusImg = await chartToImage("pie", porStatus.map((x) => x[0]), porStatus.map((x) => x[1]), porStatus.map((x) => STATUS_COLOR[x[0]] ? STATUS_COLOR[x[0]].replace("var(--danger)", "#ff5459").replace("var(--warning)", "#ffb020").replace("var(--success)", "#3dd68c") : "#93a0ac"), "Apontamentos por Status");
        const categoriaImg = await chartToImage("bar", porCategoria.map((x) => x[0]), porCategoria.map((x) => x[1]), palette, "Apontamentos por Categoria", { horizontal: true, height: 420 });
        return { empresaImg, tipoImg, statusImg, categoriaImg };
    }
    function periodoLabel() {
        return painelDataIni === painelDataFim ? fmtBR(painelDataIni) : `${fmtBR(painelDataIni)} a ${fmtBR(painelDataFim)}`;
    }
    async function exportPDF() {
        if (painelRecords.length === 0) {
            showToast("Nenhum apontamento no per\u00edodo selecionado");
            return;
        }
        setGerandoRelatorio(true);
        try {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF({ unit: "pt", format: "a4" });
            const pageWidth = doc.internal.pageSize.getWidth();
            const margin = 40;
            doc.setFillColor(31, 56, 100);
            doc.rect(0, 0, pageWidth, 74, "F");
            doc.setTextColor(255, 255, 255);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(17);
            doc.text("Farol de Apontamento no Campo", margin, 30);
            doc.setFontSize(10);
            doc.setFont("helvetica", "normal");
            doc.text("Tenda SSMA \u00b7 Infra-Externa", margin, 46);
            doc.text(`Per\u00edodo: ${periodoLabel()}  \u00b7  Gerado em ${new Date().toLocaleString("pt-BR")}`, margin, 62);
            let y = 100;
            doc.setTextColor(20, 20, 20);
            const kpiData = [
                { label: "Total", value: kpis.total, color: [46, 91, 154] },
                { label: "Risco Alto/Cr\u00edtico", value: kpis.riscoAltoCritico, color: [192, 57, 43] },
                { label: "Cond. Inseguras", value: kpis.inseguras, color: [230, 126, 34] },
                { label: "A\u00e7\u00f5es Abertas", value: kpis.abertas, color: [125, 102, 8] },
                { label: "A\u00e7\u00f5es Conclu\u00eddas", value: kpis.concluidas, color: [30, 132, 73] },
            ];
            const gap = 8;
            const cardW = (pageWidth - margin * 2 - gap * 4) / 5;
            kpiData.forEach((k, i) => {
                const x = margin + i * (cardW + gap);
                doc.setFillColor(k.color[0], k.color[1], k.color[2]);
                doc.roundedRect(x, y, cardW, 56, 4, 4, "F");
                doc.setTextColor(255, 255, 255);
                doc.setFont("helvetica", "bold");
                doc.setFontSize(19);
                doc.text(String(k.value), x + cardW / 2, y + 26, { align: "center" });
                doc.setFontSize(7.5);
                doc.setFont("helvetica", "normal");
                doc.text(k.label, x + cardW / 2, y + 42, { align: "center", maxWidth: cardW - 6 });
            });
            y += 78;
            const { empresaImg, tipoImg, statusImg, categoriaImg } = await buildDashboardCharts();
            const imgW = (pageWidth - margin * 2 - 12) / 2;
            const imgH = imgW * 0.58;
            doc.addImage(empresaImg, "PNG", margin, y, imgW, imgH);
            doc.addImage(tipoImg, "PNG", margin + imgW + 12, y, imgW, imgH);
            y += imgH + 12;
            doc.addImage(statusImg, "PNG", margin, y, imgW, imgH);
            doc.addImage(categoriaImg, "PNG", margin + imgW + 12, y, imgW, imgH);
            doc.addPage();
            doc.setTextColor(20, 20, 20);
            doc.setFontSize(13);
            doc.setFont("helvetica", "bold");
            doc.text("Registros do per\u00edodo", margin, 40);
            const rows = [...painelRecords]
                .sort((a, b) => a.id - b.id)
                .map((r) => [r.id, fmtBR(r.data), r.empresa, r.colaborador, r.categoria, r.condicao, r.nivel, r.status]);
            doc.autoTable({
                startY: 54,
                margin: { left: margin, right: margin },
                head: [["ID", "Data", "Empresa", "Colaborador", "Categoria", "Condi\u00e7\u00e3o", "N\u00edvel", "Status"]],
                body: rows,
                headStyles: { fillColor: [46, 91, 154], textColor: 255, fontSize: 8 },
                bodyStyles: { fontSize: 8 },
                alternateRowStyles: { fillColor: [245, 247, 250] },
            });
            doc.save(`Farol_Apontamento_Relatorio_${painelDataIni}_a_${painelDataFim}.pdf`);
            showToast("Relat\u00f3rio PDF gerado");
        }
        catch (e) {
            showToast("Erro ao gerar PDF");
        }
        finally {
            setGerandoRelatorio(false);
        }
    }
    async function exportExcel() {
        if (painelRecords.length === 0) {
            showToast("Nenhum apontamento no per\u00edodo selecionado");
            return;
        }
        setGerandoRelatorio(true);
        try {
            const wb = new ExcelJS.Workbook();
            wb.creator = "Farol de Apontamento no Campo";
            const wsInfo = wb.addWorksheet("Instru\u00e7\u00f5es");
            wsInfo.getColumn(1).width = 100;
            const infoLines = [
                "COMO USAR ESTA PLANILHA",
                "",
                "Aba 'Registro': cada linha \u00e9 um apontamento de risco ou comportamento lan\u00e7ado em campo.",
                "Aba 'Dashboard': indicadores e gr\u00e1ficos do per\u00edodo selecionado no app (Painel).",
                "",
                `Per\u00edodo: ${periodoLabel()}`,
                `Exportado em: ${new Date().toLocaleString("pt-BR")}`,
                `Total de apontamentos no per\u00edodo: ${painelRecords.length}`,
            ];
            infoLines.forEach((l) => wsInfo.addRow([l]));
            wsInfo.getCell("A1").font = { bold: true, size: 16, color: { argb: "FF1F3864" } };
            const wsReg = wb.addWorksheet("Registro");
            const header = ["ID", "Data", "Semana", "Empresa", "Colaborador", "Fun\u00e7\u00e3o", "Obra / Trecho", "Tipo", "Categoria", "Condi\u00e7\u00e3o", "Descri\u00e7\u00e3o", "N\u00edvel de Risco", "A\u00e7\u00e3o Corretiva", "Respons\u00e1vel", "Prazo", "Status", "T\u00e9cnico"];
            wsReg.addRow(header);
            wsReg.getRow(1).eachCell((cell) => {
                cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
                cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF2E5B9A" } };
            });
            [...painelRecords]
                .sort((a, b) => a.id - b.id)
                .forEach((r) => {
                wsReg.addRow([r.id, fmtBR(r.data), r.semana || weekNumber(r.data), r.empresa, r.colaborador, r.funcao, r.obra, r.tipo, r.categoria, r.condicao, r.descricao, r.nivel, r.acao, r.responsavelAcao, r.prazo ? fmtBR(r.prazo) : "-", r.status, r.tecnico]);
            });
            const widths = [5, 11, 8, 22, 20, 16, 26, 14, 24, 10, 40, 12, 32, 18, 11, 14, 18];
            wsReg.columns.forEach((col, i) => { col.width = widths[i] || 16; });
            const wsDash = wb.addWorksheet("Dashboard");
            wsDash.getColumn(1).width = 3;
            wsDash.mergeCells("B2:K2");
            wsDash.getCell("B2").value = "FAROL DE APONTAMENTO NO CAMPO";
            wsDash.getCell("B2").font = { bold: true, size: 18, color: { argb: "FFFFFFFF" } };
            wsDash.getCell("B2").fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF1F3864" } };
            wsDash.getRow(2).height = 26;
            wsDash.getCell("B4").value = `Tenda SSMA \u00b7 Infra-Externa  |  Per\u00edodo: ${periodoLabel()}`;
            wsDash.getCell("B4").font = { color: { argb: "FF1F3864" }, bold: true };
            const kpiCells = [
                { addr: "B", label: "TOTAL", value: kpis.total, color: "FF2E5B9A" },
                { addr: "D", label: "RISCO ALTO/CR\u00cdTICO", value: kpis.riscoAltoCritico, color: "FFC0392B" },
                { addr: "F", label: "COND. INSEGURAS", value: kpis.inseguras, color: "FFE67E22" },
                { addr: "H", label: "A\u00c7\u00d5ES ABERTAS", value: kpis.abertas, color: "FF7D6608" },
                { addr: "J", label: "A\u00c7\u00d5ES CONCLU\u00cdDAS", value: kpis.concluidas, color: "FF1E8449" },
            ];
            kpiCells.forEach((k) => {
                wsDash.getCell(`${k.addr}6`).value = k.label;
                wsDash.getCell(`${k.addr}6`).font = { bold: true, size: 9, color: { argb: "FFFFFFFF" } };
                wsDash.getCell(`${k.addr}6`).fill = { type: "pattern", pattern: "solid", fgColor: { argb: k.color } };
                wsDash.getCell(`${k.addr}7`).value = k.value;
                wsDash.getCell(`${k.addr}7`).font = { bold: true, size: 20, color: { argb: "FFFFFFFF" } };
                wsDash.getCell(`${k.addr}7`).fill = { type: "pattern", pattern: "solid", fgColor: { argb: k.color } };
            });
            const { empresaImg, tipoImg, statusImg, categoriaImg } = await buildDashboardCharts();
            const addImg = (dataUrl, range) => {
                const imgId = wb.addImage({ base64: dataUrl, extension: "png" });
                wsDash.addImage(imgId, range);
            };
            addImg(empresaImg, "B10:F26");
            addImg(tipoImg, "H10:K26");
            addImg(statusImg, "B28:F44");
            addImg(categoriaImg, "H28:K44");
            const buf = await wb.xlsx.writeBuffer();
            const blob = new Blob([buf], { type: "application/octet-stream" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `Farol_Apontamento_Relatorio_${painelDataIni}_a_${painelDataFim}.xlsx`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showToast("Planilha exportada");
        }
        catch (e) {
            showToast("Erro ao gerar planilha");
        }
        finally {
            setGerandoRelatorio(false);
        }
    }
    function periodoLabelFotos() {
        return fotoDataIni === fotoDataFim ? fmtBR(fotoDataIni) : `${fmtBR(fotoDataIni)} a ${fmtBR(fotoDataFim)}`;
    }
    async function exportFotosPDF() {
        if (fotosFiltradas.length === 0) {
            showToast("Nenhuma foto no per\u00edodo selecionado");
            return;
        }
        setGerandoRelatorioFotos(true);
        try {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF({ unit: "pt", format: "a4" });
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            const margin = 40;
            function drawHeader() {
                doc.setFillColor(31, 56, 100);
                doc.rect(0, 0, pageWidth, 74, "F");
                doc.setTextColor(255, 255, 255);
                doc.setFont("helvetica", "bold");
                doc.setFontSize(17);
                doc.text("Registro Fotogr\u00e1fico de Campo", margin, 30);
                doc.setFontSize(10);
                doc.setFont("helvetica", "normal");
                doc.text("Tenda SSMA \u00b7 Infra-Externa", margin, 46);
                doc.text(`Per\u00edodo: ${periodoLabelFotos()}  \u00b7  Gerado em ${new Date().toLocaleString("pt-BR")}  \u00b7  ${fotosFiltradas.length} foto(s)`, margin, 62);
            }
            function loadImageSize(dataUrl) {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.onload = () => resolve({ w: img.width, h: img.height });
                    img.onerror = () => resolve({ w: 4, h: 3 });
                    img.src = dataUrl;
                });
            }
            drawHeader();
            let y = 96;
            const sorted = [...fotosFiltradas].sort((a, b) => a.id - b.id);
            for (const item of sorted) {
                const { w, h } = await loadImageSize(item.foto);
                const maxImgW = pageWidth - margin * 2;
                const maxImgH = 260;
                let imgW = maxImgW;
                let imgH = imgW * (h / w);
                if (imgH > maxImgH) {
                    imgH = maxImgH;
                    imgW = imgH * (w / h);
                }
                const textBlockH = 46;
                const blockH = imgH + textBlockH + 22;
                if (y + blockH > pageHeight - 40) {
                    doc.addPage();
                    drawHeader();
                    y = 96;
                }
                const imgX = margin + (maxImgW - imgW) / 2;
                doc.setDrawColor(220, 224, 228);
                doc.setLineWidth(1);
                doc.rect(imgX - 2, y - 2, imgW + 4, imgH + 4);
                doc.addImage(item.foto, "JPEG", imgX, y, imgW, imgH);
                y += imgH + 10;
                doc.setTextColor(20, 20, 20);
                doc.setFont("helvetica", "bold");
                doc.setFontSize(10.5);
                const linha1 = `Foto #${item.id}  \u00b7  ${fmtBR(item.data)}` + (item.local ? `  \u00b7  ${item.local}` : "");
                doc.text(linha1, margin, y);
                y += 15;
                doc.setFont("helvetica", "normal");
                doc.setFontSize(9.5);
                doc.setTextColor(70, 78, 86);
                const obsText = item.observacao ? item.observacao : "(sem observa\u00e7\u00e3o)";
                const wrapped = doc.splitTextToSize(obsText, pageWidth - margin * 2);
                doc.text(wrapped, margin, y);
                y += wrapped.length * 12 + 20;
            }
            doc.save(`Farol_Fotos_Relatorio_${fotoDataIni}_a_${fotoDataFim}.pdf`);
            showToast("Relat\u00f3rio de fotos gerado");
        }
        catch (e) {
            showToast("Erro ao gerar relat\u00f3rio de fotos");
        }
        finally {
            setGerandoRelatorioFotos(false);
        }
    }
    return (React.createElement("div", { className: "app-root", ref: topRef },
        React.createElement("style", null, `
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

        :root{
          --bg:#0f1318;
          --surface:#1a2029;
          --surface-2:#232b35;
          --surface-3:#2c3744;
          --border:#2e3742;
          --accent:#ff7a1f;
          --accent-deep:#c94e00;
          --accent-2:#ffc93c;
          --text:#f3f5f7;
          --text-muted:#8b97a3;
          --danger:#ff5c61;
          --warning:#ffb020;
          --success:#36d399;
          --info:#4ea1ff;
        }
        *{box-sizing:border-box;}
        .app-root{
          background:
            radial-gradient(520px 260px at 18% -10%, rgba(255,122,31,0.16), transparent 60%),
            linear-gradient(180deg,#121720 0%,var(--bg) 240px);
          color:var(--text);
          font-family:'Barlow',system-ui,sans-serif;
          min-height:600px;
          max-width:480px;
          margin:0 auto;
          position:relative;
          border-radius:18px;
          overflow:hidden;
          display:flex;
          flex-direction:column;
          box-shadow:0 0 0 1px var(--border), 0 24px 60px -28px rgba(0,0,0,0.7);
        }
        .hazard{
          height:6px;
          background:repeating-linear-gradient(135deg,var(--accent-2) 0 11px,#14181d 11px 22px);
          flex-shrink:0;
          box-shadow:0 1px 0 rgba(0,0,0,0.5), 0 2px 6px rgba(0,0,0,0.35);
          position:relative;
          z-index:2;
        }
        .header{
          background:linear-gradient(180deg,var(--surface) 0%, #171d25 100%);
          padding:17px 18px 15px;
          flex-shrink:0;
          border-bottom:1px solid var(--border);
        }
        .header-row{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:10px;
        }
        .brand{
          display:flex;
          align-items:center;
          gap:11px;
        }
        .brand-icon{
          width:44px;height:44px;
          border-radius:11px;
          overflow:hidden;
          display:flex;align-items:center;justify-content:center;
          flex-shrink:0;
          border:1px solid var(--border);
          background:#0b0e12;
          box-shadow:inset 0 0 0 1px rgba(255,255,255,0.03), 0 4px 10px rgba(0,0,0,0.4);
        }
        .brand-icon img{
          width:100%;height:100%;object-fit:cover;
        }
        .brand h1{
          font-family:'Barlow Condensed',sans-serif;
          font-weight:800;
          font-size:16.5px;
          letter-spacing:0.3px;
          line-height:1.08;
          margin:0;
          text-transform:uppercase;
        }
        .brand p{
          margin:3px 0 0;
          font-size:11.5px;
          color:var(--text-muted);
          font-weight:500;
        }
        .export-btn{
          background:var(--surface-2);
          border:1px solid var(--border);
          color:var(--text);
          width:40px;height:40px;
          border-radius:10px;
          display:flex;align-items:center;justify-content:center;
          cursor:pointer;
          flex-shrink:0;
          transition:background .15s ease, border-color .15s ease, color .15s ease;
        }
        .export-btn:active{background:var(--accent);color:#14181d;border-color:var(--accent);}
        .export-btn.wide{
          width:auto;height:42px;padding:0 16px;gap:7px;font-size:13.5px;font-weight:700;
          font-family:'Barlow',sans-serif;flex:1;
          background:linear-gradient(180deg,var(--surface-3),var(--surface-2));
        }
        .export-btn.wide:active{background:linear-gradient(180deg,var(--accent),var(--accent-deep));}
        .export-btn.wide:disabled{opacity:0.5;cursor:default;}
        .painel-filtro{
          background:linear-gradient(180deg,var(--surface),#171d25);
          border:1px solid var(--border);border-radius:14px;
          padding:14px;margin-bottom:18px;display:flex;flex-direction:column;gap:11px;
          box-shadow:0 2px 10px rgba(0,0,0,0.25);
        }
        .painel-filtro-datas{display:flex;align-items:flex-end;gap:8px;}
        .painel-filtro-datas .field{margin:0;flex:1;}
        .painel-filtro-datas label{font-size:11px;color:var(--text-muted);}
        .hoje-btn{
          height:40px;padding:0 13px;border-radius:9px;border:1px solid var(--border);
          background:var(--surface-2);color:var(--text);font-weight:700;font-size:12px;cursor:pointer;
        }
        .hoje-btn:active{background:var(--accent);color:#14181d;border-color:var(--accent);}
        .painel-filtro-downloads{display:flex;gap:9px;}
        .content{
          flex:1;
          overflow-y:auto;
          padding:18px 17px 94px;
        }
        .section-label{
          font-family:'Barlow Condensed',sans-serif;
          font-weight:700;
          font-size:12.5px;
          text-transform:uppercase;
          letter-spacing:1.1px;
          color:var(--text-muted);
          margin:20px 0 9px;
          display:flex;align-items:center;gap:8px;
        }
        .section-label:first-child{margin-top:0;}
        .section-label::after{
          content:"";flex:1;height:1px;
          background:linear-gradient(90deg,var(--border),transparent);
        }
        .field{margin-bottom:13px;}
        .field label{
          display:block;
          font-size:12px;
          font-weight:600;
          color:var(--text-muted);
          margin-bottom:6px;
        }
        .field label .req{color:var(--accent);margin-left:2px;}
        .input,.select,.textarea{
          width:100%;
          background:var(--surface-2);
          border:1px solid var(--border);
          color:var(--text);
          border-radius:10px;
          padding:11.5px 12px;
          font-size:14.5px;
          font-family:inherit;
          -webkit-appearance:none;
          appearance:none;
          transition:border-color .15s ease, box-shadow .15s ease;
        }
        .select{
          background-image:linear-gradient(45deg,transparent 50%,var(--text-muted) 50%),linear-gradient(135deg,var(--text-muted) 50%,transparent 50%);
          background-position:calc(100% - 18px) 50%,calc(100% - 13px) 50%;
          background-size:5px 5px,5px 5px;
          background-repeat:no-repeat;
          padding-right:34px;
        }
        .textarea{resize:vertical;min-height:66px;line-height:1.45;}
        .input:focus,.select:focus,.textarea:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 3px rgba(255,122,31,0.15);}
        .input.err,.select.err,.textarea.err{border-color:var(--danger);}
        .row2{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
        .empresa-row{display:flex;gap:8px;}
        .empresa-row .select{flex:1;}
        .add-empresa-btn{
          background:var(--surface-2);
          border:1px solid var(--border);
          color:var(--accent);
          width:44px;border-radius:10px;
          display:flex;align-items:center;justify-content:center;
          cursor:pointer;flex-shrink:0;
        }
        .add-empresa-panel{
          display:flex;gap:8px;margin-top:8px;
        }
        .chip-row{display:flex;gap:8px;flex-wrap:wrap;}
        .chip{
          padding:8.5px 14px;border-radius:20px;font-size:13px;font-weight:600;
          border:1.5px solid var(--border);background:var(--surface-2);color:var(--text-muted);
          cursor:pointer;
          transition:all .15s ease;
        }
        .chip.active{color:#14181d;border-color:transparent;box-shadow:0 3px 10px -3px rgba(255,122,31,0.6);}
        .save-bar{
          display:flex;gap:10px;margin-top:22px;
        }
        .btn-primary{
          flex:1;
          background:linear-gradient(180deg,var(--accent),var(--accent-deep));
          color:#1a0f05;
          border:none;border-radius:11px;
          padding:15px;
          font-weight:700;font-size:14.5px;
          font-family:'Barlow Condensed',sans-serif;
          text-transform:uppercase;letter-spacing:0.6px;
          display:flex;align-items:center;justify-content:center;gap:8px;
          cursor:pointer;
          box-shadow:0 8px 20px -8px rgba(255,122,31,0.55);
        }
        .btn-primary:active{filter:brightness(0.92);box-shadow:0 4px 10px -4px rgba(255,122,31,0.5);}
        .btn-ghost{
          background:transparent;border:1px solid var(--border);color:var(--text-muted);
          border-radius:11px;padding:15px 17px;font-weight:600;font-size:13.5px;
          cursor:pointer;
        }
        .btn-ghost:active{background:var(--surface-2);}
        .editing-banner{
          background:rgba(255,122,31,0.1);
          border:1px solid var(--accent);
          color:var(--accent-2);
          border-radius:10px;
          padding:10px 13px;
          font-size:13px;font-weight:600;
          margin-bottom:15px;
          display:flex;align-items:center;justify-content:space-between;
        }
        .bottom-nav{
          position:absolute;left:0;right:0;bottom:0;
          background:linear-gradient(180deg,var(--surface),#171d25);
          border-top:1px solid var(--border);
          display:flex;
          padding:9px 10px calc(9px + env(safe-area-inset-bottom));
          gap:6px;
          box-shadow:0 -6px 16px rgba(0,0,0,0.3);
        }
        .nav-btn{
          flex:1;
          background:none;border:none;color:var(--text-muted);
          display:flex;flex-direction:column;align-items:center;gap:4px;
          padding:7px 4px;border-radius:10px;
          font-size:10.5px;font-weight:700;
          text-transform:uppercase;letter-spacing:0.4px;
          font-family:'Barlow Condensed',sans-serif;
          cursor:pointer;
          position:relative;
          transition:color .15s ease;
        }
        .nav-btn.active{color:var(--accent);}
        .nav-btn.active::before{
          content:"";position:absolute;top:-9px;left:50%;transform:translateX(-50%);
          width:22px;height:3px;border-radius:0 0 3px 3px;background:var(--accent);
        }
        .search-bar{
          display:flex;align-items:center;gap:8px;
          background:var(--surface-2);border:1px solid var(--border);
          border-radius:10px;padding:10.5px 12px;margin-bottom:11px;
        }
        .search-bar input{
          background:none;border:none;color:var(--text);flex:1;font-size:14px;font-family:inherit;
        }
        .search-bar input:focus{outline:none;}
        .filtros-toggle{
          display:flex;align-items:center;gap:6px;
          font-size:12.5px;font-weight:600;color:var(--text-muted);
          margin-bottom:11px;cursor:pointer;
        }
        .filtros-panel{
          display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:13px;
        }
        .filtros-panel select{font-size:12px;padding:9px 8px;}
        .record-card{
          background:linear-gradient(180deg,var(--surface),#191f27);
          border:1px solid var(--border);
          border-radius:13px;
          padding:14px 15px;
          margin-bottom:11px;
          position:relative;
          overflow:hidden;
          box-shadow:0 2px 8px rgba(0,0,0,0.22);
        }
        .record-bar{
          position:absolute;left:0;top:0;bottom:0;width:4px;
        }
        .record-top{
          display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:7px;
        }
        .record-empresa{font-weight:700;font-size:14px;}
        .record-date{
          font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--text-muted);white-space:nowrap;
        }
        .record-meta{font-size:12px;color:var(--text-muted);margin-bottom:7px;}
        .record-desc{font-size:13.5px;line-height:1.45;margin-bottom:11px;color:var(--text);}
        .record-bottom{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;}
        .badges{display:flex;gap:6px;flex-wrap:wrap;}
        .badge{
          font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.3px;
          padding:4.5px 8px;border-radius:6px;color:#14181d;
        }
        .badge.outline{background:none;border:1px solid var(--border);color:var(--text-muted);}
        .record-actions{display:flex;gap:6px;}
        .icon-btn{
          width:31px;height:31px;border-radius:8px;border:1px solid var(--border);
          background:var(--surface-2);color:var(--text-muted);
          display:flex;align-items:center;justify-content:center;cursor:pointer;
        }
        .icon-btn.danger{color:var(--danger);}
        .icon-btn.danger.armed{background:var(--danger);color:#fff;border-color:var(--danger);}
        .empty-state{
          text-align:center;padding:54px 20px;color:var(--text-muted);
        }
        .empty-state svg{
          margin-bottom:12px;color:var(--accent);
          padding:14px;border-radius:50%;
          background:var(--surface-2);
          box-shadow:inset 0 0 0 1px var(--border);
        }
        .empty-state h3{font-family:'Barlow Condensed',sans-serif;color:var(--text);font-size:16px;margin:0 0 4px;text-transform:uppercase;letter-spacing:0.3px;}
        .empty-state p{font-size:13px;margin:0 0 16px;}
        .kpi-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:8px;}
        .kpi-card{
          background:linear-gradient(180deg,var(--surface),#171d25);border:1px solid var(--border);border-radius:13px;
          padding:15px;
        }
        .kpi-card.wide{
          grid-column:span 2;
          background:linear-gradient(135deg,rgba(255,122,31,0.16),var(--surface) 65%);
          border-color:rgba(255,122,31,0.35);
        }
        .kpi-value{
          font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:31px;line-height:1;
        }
        .kpi-card.wide .kpi-value{color:var(--accent-2);}
        .kpi-label{font-size:11px;color:var(--text-muted);font-weight:600;margin-top:6px;text-transform:uppercase;letter-spacing:0.4px;}
        .bar-list{background:linear-gradient(180deg,var(--surface),#171d25);border:1px solid var(--border);border-radius:13px;padding:15px;margin-bottom:13px;}
        .bar-item{margin-bottom:11px;}
        .bar-item:last-child{margin-bottom:0;}
        .bar-item-top{display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:5px;}
        .bar-item-top span:last-child{font-family:'IBM Plex Mono',monospace;color:var(--text-muted);}
        .bar-track{height:6px;background:var(--surface-2);border-radius:4px;overflow:hidden;}
        .bar-fill{height:100%;background:linear-gradient(90deg,var(--accent-deep),var(--accent));border-radius:4px;}
        .toast{
          position:absolute;bottom:80px;left:16px;right:16px;
          background:var(--surface-2);border:1px solid var(--accent);color:var(--text);
          padding:12px 15px;border-radius:10px;font-size:13px;font-weight:600;
          display:flex;align-items:center;gap:8px;
          box-shadow:0 10px 28px rgba(0,0,0,0.45);
          z-index:20;
        }
        .foto-capture-btn{
          display:flex;flex-direction:column;align-items:center;justify-content:center;gap:9px;
          background:linear-gradient(180deg,var(--surface),#191f27);
          border:1.5px dashed var(--border);border-radius:13px;
          padding:30px 16px;color:var(--text-muted);
          font-size:13px;font-weight:600;text-align:center;cursor:pointer;
          transition:border-color .15s ease,color .15s ease;
        }
        .foto-capture-btn:active{border-color:var(--accent);color:var(--accent);}
        .foto-capture-btn svg{color:var(--accent);}
        .foto-preview-wrap{
          position:relative;border-radius:13px;overflow:hidden;
          border:1px solid var(--border);background:#000;
          box-shadow:0 2px 8px rgba(0,0,0,0.22);
        }
        .foto-preview-img{
          display:block;width:100%;max-height:320px;object-fit:contain;background:#000;cursor:pointer;
        }
        .foto-preview-remove{
          position:absolute;top:10px;right:10px;
          display:flex;align-items:center;gap:5px;
          background:rgba(20,24,29,0.82);border:1px solid var(--border);color:var(--text);
          font-size:12px;font-weight:700;border-radius:8px;padding:6px 10px;cursor:pointer;
        }
        .foto-filtro-count{
          font-size:11.5px;color:var(--text-muted);margin-top:8px;text-align:right;
        }
        .foto-card{
          display:flex;gap:11px;align-items:stretch;
          background:linear-gradient(180deg,var(--surface),#191f27);
          border:1px solid var(--border);
          border-radius:13px;
          padding:10px;
          margin-bottom:11px;
          box-shadow:0 2px 8px rgba(0,0,0,0.22);
        }
        .foto-thumb{
          width:72px;height:72px;min-width:72px;border-radius:9px;object-fit:cover;
          border:1px solid var(--border);cursor:pointer;background:#000;
        }
        .foto-card-body{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px;justify-content:center;}
        .foto-card-top{display:flex;justify-content:space-between;align-items:center;gap:8px;}
        .foto-card-id{font-weight:700;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
        .foto-card-obs{
          font-size:12.5px;color:var(--text-muted);line-height:1.4;
          display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;
        }
        .foto-card .icon-btn{align-self:center;flex-shrink:0;}
        .foto-lightbox{
          position:fixed;inset:0;background:rgba(0,0,0,0.88);
          display:flex;align-items:center;justify-content:center;
          padding:24px;z-index:50;cursor:zoom-out;
        }
        .foto-lightbox img{
          max-width:100%;max-height:100%;border-radius:10px;
          box-shadow:0 10px 40px rgba(0,0,0,0.6);
        }
      `),
        React.createElement("div", { className: "header" },
            React.createElement("div", { className: "header-row" },
                React.createElement("div", { className: "brand" },
                    React.createElement("div", { className: "brand-icon" },
                        React.createElement("img", { src: LOGO_SRC, alt: "Infra-Externa" })),
                    React.createElement("div", null,
                        React.createElement("h1", null, "Farol de Apontamento no Campo"),
                        React.createElement("p", null, "Tenda SSMA \u00B7 Infra-Externa"))),
                React.createElement("button", { className: "export-btn", onClick: () => setTab("painel"), title: "Ir para o Painel / baixar relat\u00f3rio" },
                    React.createElement(LayoutDashboard, { size: 18 })))),
        React.createElement("div", { className: "hazard" }),
        React.createElement("div", { className: "content" },
            tab === "novo" && (React.createElement("div", null,
                editingId && (React.createElement("div", { className: "editing-banner" },
                    React.createElement("span", null,
                        "Editando apontamento #",
                        editingId),
                    React.createElement(X, { size: 16, style: { cursor: "pointer" }, onClick: cancelEdit }))),
                React.createElement("div", { className: "section-label" }, "Local"),
                React.createElement("div", { className: "field" },
                    React.createElement("label", null,
                        "Empresa",
                        React.createElement("span", { className: "req" }, "*")),
                    React.createElement("div", { className: "empresa-row" },
                        React.createElement("select", { className: `select ${errors.empresa ? "err" : ""}`, value: form.empresa, onChange: (e) => updateField("empresa", e.target.value) }, empresasList.map((e) => (React.createElement("option", { key: e, value: e }, e)))),
                        React.createElement("div", { className: "add-empresa-btn", onClick: () => setAddingEmpresa((v) => !v) },
                            React.createElement(Plus, { size: 18 }))),
                    addingEmpresa && (React.createElement("div", { className: "add-empresa-panel" },
                        React.createElement("input", { className: "input", placeholder: "Nome da nova empresa", value: novaEmpresa, onChange: (e) => setNovaEmpresa(e.target.value) }),
                        React.createElement("button", { className: "icon-btn", onClick: handleAddEmpresa },
                            React.createElement(CheckCircle2, { size: 17 }))))),
                React.createElement("div", { className: "field" },
                    React.createElement("label", null, "Obra / Trecho"),
                    React.createElement("input", { className: "input", placeholder: "Ex.: Rede Coletora - Trecho A", value: form.obra, onChange: (e) => updateField("obra", e.target.value) })),
                React.createElement("div", { className: "row2" },
                    React.createElement("div", { className: "field" },
                        React.createElement("label", null,
                            "Data",
                            React.createElement("span", { className: "req" }, "*")),
                        React.createElement("input", { className: `input ${errors.data ? "err" : ""}`, type: "date", value: form.data, onChange: (e) => updateField("data", e.target.value) })),
                    React.createElement("div", { className: "field" },
                        React.createElement("label", null, "Prazo"),
                        React.createElement("input", { className: "input", type: "date", value: form.prazo, onChange: (e) => updateField("prazo", e.target.value) }))),
                React.createElement("div", { className: "section-label" }, "Pessoas"),
                React.createElement("div", { className: "field" },
                    React.createElement("label", null,
                        "Colaborador observado",
                        React.createElement("span", { className: "req" }, "*")),
                    React.createElement("input", { className: `input ${errors.colaborador ? "err" : ""}`, placeholder: "Nome do colaborador", value: form.colaborador, onChange: (e) => updateField("colaborador", e.target.value) })),
                React.createElement("div", { className: "field" },
                    React.createElement("label", null, "Fun\u00E7\u00E3o"),
                    React.createElement("input", { className: "input", placeholder: "Ex.: Servente, Encanador...", value: form.funcao, onChange: (e) => updateField("funcao", e.target.value) })),
                React.createElement("div", { className: "field" },
                    React.createElement("label", null,
                        "T\u00E9cnico respons\u00E1vel",
                        React.createElement("span", { className: "req" }, "*")),
                    React.createElement("input", { className: `input ${errors.tecnico ? "err" : ""}`, placeholder: "Seu nome", value: form.tecnico, onChange: (e) => updateField("tecnico", e.target.value) })),
                React.createElement("div", { className: "section-label" }, "Apontamento"),
                React.createElement("div", { className: "field" },
                    React.createElement("label", null, "Tipo"),
                    React.createElement("div", { className: "chip-row" }, TIPOS.map((t) => (React.createElement("div", { key: t, className: `chip ${form.tipo === t ? "active" : ""}`, style: form.tipo === t ? { background: t === "Risco" ? "var(--danger)" : "var(--info)" } : {}, onClick: () => updateField("tipo", t) }, t))))),
                React.createElement("div", { className: "row2" },
                    React.createElement("div", { className: "field" },
                        React.createElement("label", null, "Categoria"),
                        React.createElement("select", { className: "select", value: form.categoria, onChange: (e) => updateField("categoria", e.target.value) }, CATEGORIAS.map((c) => (React.createElement("option", { key: c, value: c }, c))))),
                    React.createElement("div", { className: "field" },
                        React.createElement("label", null, "Condi\u00E7\u00E3o"),
                        React.createElement("select", { className: "select", value: form.condicao, onChange: (e) => updateField("condicao", e.target.value) }, CONDICOES.map((c) => (React.createElement("option", { key: c, value: c }, c)))))),
                React.createElement("div", { className: "field" },
                    React.createElement("label", null, "N\u00EDvel de risco"),
                    React.createElement("div", { className: "chip-row" }, NIVEIS.map((n) => (React.createElement("div", { key: n, className: `chip ${form.nivel === n ? "active" : ""}`, style: form.nivel === n ? { background: NIVEL_COLOR[n] } : {}, onClick: () => updateField("nivel", n) }, n))))),
                React.createElement("div", { className: "field" },
                    React.createElement("label", null,
                        "Descri\u00E7\u00E3o do apontamento",
                        React.createElement("span", { className: "req" }, "*")),
                    React.createElement("textarea", { className: `textarea ${errors.descricao ? "err" : ""}`, placeholder: "Descreva o que foi observado em campo", value: form.descricao, onChange: (e) => updateField("descricao", e.target.value) })),
                React.createElement("div", { className: "section-label" }, "A\u00E7\u00E3o corretiva"),
                React.createElement("div", { className: "field" },
                    React.createElement("label", null, "A\u00E7\u00E3o corretiva"),
                    React.createElement("textarea", { className: "textarea", placeholder: "O que precisa ser feito", value: form.acao, onChange: (e) => updateField("acao", e.target.value) })),
                React.createElement("div", { className: "row2" },
                    React.createElement("div", { className: "field" },
                        React.createElement("label", null, "Respons\u00E1vel pela a\u00E7\u00E3o"),
                        React.createElement("input", { className: "input", placeholder: "Quem executa", value: form.responsavelAcao, onChange: (e) => updateField("responsavelAcao", e.target.value) })),
                    React.createElement("div", { className: "field" },
                        React.createElement("label", null, "Status"),
                        React.createElement("select", { className: "select", value: form.status, onChange: (e) => updateField("status", e.target.value) }, STATUSES.map((s) => (React.createElement("option", { key: s, value: s }, s)))))),
                React.createElement("div", { className: "save-bar" },
                    editingId && (React.createElement("button", { className: "btn-ghost", onClick: cancelEdit }, "Cancelar")),
                    React.createElement("button", { className: "btn-primary", onClick: handleSave },
                        React.createElement(Save, { size: 17 }),
                        editingId ? "Atualizar apontamento" : "Salvar apontamento")))),
            tab === "registros" && (React.createElement("div", null,
                React.createElement("div", { className: "search-bar" },
                    React.createElement(Search, { size: 16, color: "var(--text-muted)" }),
                    React.createElement("input", { placeholder: "Buscar colaborador, descri\u00E7\u00E3o...", value: search, onChange: (e) => setSearch(e.target.value) }),
                    search && React.createElement(X, { size: 15, style: { cursor: "pointer" }, onClick: () => setSearch("") })),
                React.createElement("div", { className: "filtros-toggle", onClick: () => setShowFiltros((v) => !v) },
                    React.createElement(Filter, { size: 13 }),
                    " Filtros ",
                    filtered.length !== records.length ? `(${filtered.length}/${records.length})` : "",
                    React.createElement(ChevronRight, { size: 13, style: { transform: showFiltros ? "rotate(90deg)" : "none", marginLeft: "auto" } })),
                showFiltros && (React.createElement("div", { className: "filtros-panel" },
                    React.createElement("select", { className: "select", value: filtroEmpresa, onChange: (e) => setFiltroEmpresa(e.target.value) },
                        React.createElement("option", { value: "Todas" }, "Empresa"),
                        empresasList.map((e) => React.createElement("option", { key: e, value: e }, e))),
                    React.createElement("select", { className: "select", value: filtroStatus, onChange: (e) => setFiltroStatus(e.target.value) },
                        React.createElement("option", { value: "Todos" }, "Status"),
                        STATUSES.map((s) => React.createElement("option", { key: s, value: s }, s))),
                    React.createElement("select", { className: "select", value: filtroNivel, onChange: (e) => setFiltroNivel(e.target.value) },
                        React.createElement("option", { value: "Todos" }, "N\u00EDvel"),
                        NIVEIS.map((n) => React.createElement("option", { key: n, value: n }, n))))),
                filtered.length === 0 ? (React.createElement("div", { className: "empty-state" },
                    React.createElement(ClipboardList, { size: 40 }),
                    React.createElement("h3", null, records.length === 0 ? "Nenhum apontamento ainda" : "Nada encontrado"),
                    React.createElement("p", null, records.length === 0 ? "Registre o primeiro apontamento de campo" : "Ajuste a busca ou os filtros"),
                    records.length === 0 && (React.createElement("button", { className: "btn-primary", style: { display: "inline-flex" }, onClick: () => setTab("novo") },
                        React.createElement(Plus, { size: 17 }),
                        " Novo apontamento")))) : ([...filtered]
                    .sort((a, b) => b.id - a.id)
                    .map((r) => (React.createElement("div", { className: "record-card", key: r.id },
                    React.createElement("div", { className: "record-bar", style: { background: NIVEL_COLOR[r.nivel] } }),
                    React.createElement("div", { className: "record-top" },
                        React.createElement("div", null,
                            React.createElement("div", { className: "record-empresa" }, r.empresa),
                            React.createElement("div", { className: "record-meta" },
                                "#",
                                r.id,
                                " \u00B7 ",
                                r.colaborador,
                                r.funcao ? ` · ${r.funcao}` : "")),
                        React.createElement("div", { className: "record-date" }, fmtBR(r.data))),
                    React.createElement("div", { className: "record-desc" }, r.descricao),
                    React.createElement("div", { className: "record-bottom" },
                        React.createElement("div", { className: "badges" },
                            React.createElement("span", { className: "badge", style: { background: r.tipo === "Risco" ? "var(--danger)" : "var(--info)" } }, r.tipo),
                            React.createElement("span", { className: "badge", style: { background: NIVEL_COLOR[r.nivel] } }, r.nivel),
                            React.createElement("span", { className: "badge", style: { background: STATUS_COLOR[r.status] } }, r.status)),
                        React.createElement("div", { className: "record-actions" },
                            React.createElement("div", { className: "icon-btn", onClick: () => handleEdit(r) },
                                React.createElement(Pencil, { size: 14 })),
                            React.createElement("div", { className: `icon-btn danger ${deletingId === r.id ? "armed" : ""}`, onClick: () => handleDelete(r.id), title: deletingId === r.id ? "Toque para confirmar" : "Excluir" },
                                React.createElement(Trash2, { size: 14 })))))))))),
            tab === "foto" && (React.createElement("div", null,
                React.createElement("input", { ref: fotoInputRef, type: "file", accept: "image/*", capture: "environment", style: { display: "none" }, onChange: handleFotoFile }),
                React.createElement("div", { className: "section-label" }, "Nova foto"),
                fotoPreview ? (React.createElement("div", { className: "foto-preview-wrap" },
                    React.createElement("img", { src: fotoPreview, className: "foto-preview-img", onClick: () => setFotoAmpliada(fotoPreview) }),
                    React.createElement("button", { className: "foto-preview-remove", onClick: () => setFotoPreview(null), title: "Remover foto" },
                        React.createElement(X, { size: 16 }),
                        " Remover"))) : (React.createElement("div", { className: "foto-capture-btn", onClick: () => fotoInputRef.current && fotoInputRef.current.click() },
                    React.createElement(Camera, { size: 26 }),
                    React.createElement("span", null, "Tirar ou escolher foto"))),
                React.createElement("div", { className: "row2", style: { marginTop: "14px" } },
                    React.createElement("div", { className: "field" },
                        React.createElement("label", null, "Data"),
                        React.createElement("input", { className: "input", type: "date", value: fotoData, onChange: (e) => setFotoData(e.target.value) })),
                    React.createElement("div", { className: "field" },
                        React.createElement("label", null, "Local / Obra"),
                        React.createElement("input", { className: "input", placeholder: "Ex.: Trecho A", value: fotoLocal, onChange: (e) => setFotoLocal(e.target.value) }))),
                React.createElement("div", { className: "field" },
                    React.createElement("label", null, "Observação"),
                    React.createElement("textarea", { className: "textarea", placeholder: "Descreva o que foi registrado na foto...", value: fotoObs, onChange: (e) => setFotoObs(e.target.value) })),
                React.createElement("div", { className: "save-bar" },
                    React.createElement("button", { className: "btn-primary", onClick: handleSaveFoto },
                        React.createElement(Save, { size: 17 }),
                        " Salvar foto")),
                React.createElement("div", { className: "section-label" }, "Relatório de fotos"),
                React.createElement("div", { className: "painel-filtro" },
                    React.createElement("div", { className: "painel-filtro-datas" },
                        React.createElement("div", { className: "field" },
                            React.createElement("label", null, "De"),
                            React.createElement("input", { className: "input", type: "date", value: fotoDataIni, onChange: (e) => setFotoDataIni(e.target.value) })),
                        React.createElement("div", { className: "field" },
                            React.createElement("label", null, "Até"),
                            React.createElement("input", { className: "input", type: "date", value: fotoDataFim, onChange: (e) => setFotoDataFim(e.target.value) })),
                        React.createElement("button", { className: "hoje-btn", onClick: () => { const t = todayISO(); setFotoDataIni(t); setFotoDataFim(t); } }, "Hoje")),
                    React.createElement("div", { className: "painel-filtro-downloads" },
                        React.createElement("button", { className: "export-btn wide", disabled: gerandoRelatorioFotos, onClick: exportFotosPDF, title: "Baixar relatório de fotos em PDF" },
                            React.createElement(Download, { size: 16 }),
                            gerandoRelatorioFotos ? " Gerando..." : " Baixar PDF")),
                    fotosFiltradas.length !== fotos.length && (React.createElement("div", { className: "foto-filtro-count" }, fotosFiltradas.length + " de " + fotos.length + " fotos no período"))),
                React.createElement("div", { className: "section-label" }, "Fotos salvas " + (fotos.length > 0 ? "(" + fotos.length + ")" : "")),
                fotos.length === 0 ? (React.createElement("div", { className: "empty-state" },
                    React.createElement(ImagePlus, { size: 40 }),
                    React.createElement("h3", null, "Nenhuma foto ainda"),
                    React.createElement("p", null, "As fotos registradas aqui vão aparecer nesta lista"))) : ([...fotos]
                    .sort((a, b) => b.id - a.id)
                    .map((f) => (React.createElement("div", { className: "foto-card", key: f.id },
                    React.createElement("img", { src: f.foto, className: "foto-thumb", onClick: () => setFotoAmpliada(f.foto) }),
                    React.createElement("div", { className: "foto-card-body" },
                        React.createElement("div", { className: "foto-card-top" },
                            React.createElement("span", { className: "foto-card-id" }, "#" + f.id + (f.local ? " · " + f.local : "")),
                            React.createElement("span", { className: "record-date" }, fmtBR(f.data))),
                        React.createElement("div", { className: "foto-card-obs" }, f.observacao || "(sem observação)")),
                    React.createElement("div", { className: "icon-btn danger " + (deletingId === ("foto-" + f.id) ? "armed" : ""), onClick: () => handleDeleteFoto(f.id), title: deletingId === ("foto-" + f.id) ? "Toque para confirmar" : "Excluir" },
                        React.createElement(Trash2, { size: 14 })))))),
                fotoAmpliada && (React.createElement("div", { className: "foto-lightbox", onClick: () => setFotoAmpliada(null) },
                    React.createElement("img", { src: fotoAmpliada }))))),
            tab === "painel" && (React.createElement("div", null, records.length === 0 ? (React.createElement("div", { className: "empty-state" },
                React.createElement(LayoutDashboard, { size: 40 }),
                React.createElement("h3", null, "Sem dados ainda"),
                React.createElement("p", null, "O painel aparece assim que houver apontamentos"))) : (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "painel-filtro" },
                    React.createElement("div", { className: "painel-filtro-datas" },
                        React.createElement("div", { className: "field" },
                            React.createElement("label", null, "De"),
                            React.createElement("input", { className: "input", type: "date", value: painelDataIni, onChange: (e) => setPainelDataIni(e.target.value) })),
                        React.createElement("div", { className: "field" },
                            React.createElement("label", null, "At\u00e9"),
                            React.createElement("input", { className: "input", type: "date", value: painelDataFim, onChange: (e) => setPainelDataFim(e.target.value) })),
                        React.createElement("button", { className: "hoje-btn", onClick: () => { const t = todayISO(); setPainelDataIni(t); setPainelDataFim(t); } }, "Hoje")),
                    React.createElement("div", { className: "painel-filtro-downloads" },
                        React.createElement("button", { className: "export-btn wide", disabled: gerandoRelatorio, onClick: exportPDF, title: "Baixar relat\u00f3rio em PDF" },
                            React.createElement(Download, { size: 16 }),
                            gerandoRelatorio ? " Gerando..." : " PDF"),
                        React.createElement("button", { className: "export-btn wide", disabled: gerandoRelatorio, onClick: exportExcel, title: "Baixar relat\u00f3rio em Excel" },
                            React.createElement(Download, { size: 16 }),
                            gerandoRelatorio ? " Gerando..." : " Excel"))),
                painelRecords.length === 0 && (React.createElement("div", { className: "empty-state" },
                    React.createElement(LayoutDashboard, { size: 32 }),
                    React.createElement("p", null, "Nenhum apontamento no per\u00edodo selecionado"))),
                React.createElement("div", { className: "kpi-grid" },
                    React.createElement("div", { className: "kpi-card wide" },
                        React.createElement("div", { className: "kpi-value" }, kpis.total),
                        React.createElement("div", { className: "kpi-label" }, "Total de apontamentos")),
                    React.createElement("div", { className: "kpi-card" },
                        React.createElement("div", { className: "kpi-value", style: { color: "var(--danger)" } }, kpis.riscoAltoCritico),
                        React.createElement("div", { className: "kpi-label" }, "Risco alto/cr\u00EDtico")),
                    React.createElement("div", { className: "kpi-card" },
                        React.createElement("div", { className: "kpi-value", style: { color: "var(--warning)" } }, kpis.inseguras),
                        React.createElement("div", { className: "kpi-label" }, "Condi\u00E7\u00F5es inseguras")),
                    React.createElement("div", { className: "kpi-card" },
                        React.createElement("div", { className: "kpi-value", style: { color: "var(--danger)" } }, kpis.abertas),
                        React.createElement("div", { className: "kpi-label" }, "A\u00E7\u00F5es em aberto")),
                    React.createElement("div", { className: "kpi-card" },
                        React.createElement("div", { className: "kpi-value", style: { color: "var(--success)" } }, kpis.concluidas),
                        React.createElement("div", { className: "kpi-label" }, "A\u00E7\u00F5es conclu\u00EDdas"))),
                React.createElement("div", { className: "section-label" }, "Por empresa"),
                React.createElement("div", { className: "bar-list" }, porEmpresa.map(([k, v]) => (React.createElement("div", { className: "bar-item", key: k },
                    React.createElement("div", { className: "bar-item-top" },
                        React.createElement("span", null, k),
                        React.createElement("span", null, v)),
                    React.createElement("div", { className: "bar-track" },
                        React.createElement("div", { className: "bar-fill", style: { width: `${(v / maxCount(porEmpresa)) * 100}%` } })))))),
                React.createElement("div", { className: "section-label" }, "Por tipo"),
                React.createElement("div", { className: "bar-list" }, porTipo.map(([k, v]) => (React.createElement("div", { className: "bar-item", key: k },
                    React.createElement("div", { className: "bar-item-top" },
                        React.createElement("span", null, k),
                        React.createElement("span", null, v)),
                    React.createElement("div", { className: "bar-track" },
                        React.createElement("div", { className: "bar-fill", style: { width: `${(v / maxCount(porTipo)) * 100}%`, background: k === "Risco" ? "var(--danger)" : "var(--info)" } })))))),
                React.createElement("div", { className: "section-label" }, "Por status"),
                React.createElement("div", { className: "bar-list" }, porStatus.map(([k, v]) => (React.createElement("div", { className: "bar-item", key: k },
                    React.createElement("div", { className: "bar-item-top" },
                        React.createElement("span", null, k),
                        React.createElement("span", null, v)),
                    React.createElement("div", { className: "bar-track" },
                        React.createElement("div", { className: "bar-fill", style: { width: `${(v / maxCount(porStatus)) * 100}%`, background: STATUS_COLOR[k] } })))))),
                React.createElement("div", { className: "section-label" }, "Por categoria"),
                React.createElement("div", { className: "bar-list" }, porCategoria.map(([k, v]) => (React.createElement("div", { className: "bar-item", key: k },
                    React.createElement("div", { className: "bar-item-top" },
                        React.createElement("span", null, k),
                        React.createElement("span", null, v)),
                    React.createElement("div", { className: "bar-track" },
                        React.createElement("div", { className: "bar-fill", style: { width: `${(v / maxCount(porCategoria)) * 100}%` } }))))))))))),
        toast && (React.createElement("div", { className: "toast" },
            React.createElement(CheckCircle2, { size: 16, color: "var(--accent)" }),
            toast)),
        React.createElement("div", { className: "bottom-nav" },
            React.createElement("button", { className: `nav-btn ${tab === "novo" ? "active" : ""}`, onClick: () => setTab("novo") },
                React.createElement(Plus, { size: 19 }),
                "Novo"),
            React.createElement("button", { className: `nav-btn ${tab === "registros" ? "active" : ""}`, onClick: () => setTab("registros") },
                React.createElement(ClipboardList, { size: 19 }),
                "Registros ",
                records.length > 0 ? `(${records.length})` : ""),
            React.createElement("button", { className: `nav-btn ${tab === "foto" ? "active" : ""}`, onClick: () => setTab("foto") },
                React.createElement(Camera, { size: 19 }),
                "Foto ",
                fotos.length > 0 ? `(${fotos.length})` : ""),
            React.createElement("button", { className: `nav-btn ${tab === "painel" ? "active" : ""}`, onClick: () => setTab("painel") },
                React.createElement(LayoutDashboard, { size: 19 }),
                "Painel"))));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
