module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/services/authService.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserById",
    ()=>getUserById,
    "loginUser",
    ()=>loginUser
]);
// Dummy auth users for early project phase (no DB dependency).
const DUMMY_USERS = [
    {
        userId: 1,
        email: "connor@britannicus.local",
        password: "Connor123!",
        firstName: "Connor",
        lastName: "Whyte",
        role: "admin",
        isActive: true
    },
    {
        userId: 2,
        email: "luciia@britannicus.local",
        password: "Luciia123!",
        firstName: "Luciia",
        lastName: "Whyte",
        role: "manager",
        isActive: true
    },
    {
        userId: 3,
        email: "derek@britannicus.local",
        password: "Derek123!",
        firstName: "Derek",
        lastName: "Arthurs",
        role: "employee",
        isActive: true
    }
];
function toPublicUser(user) {
    return {
        userId: user.userId,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
    };
}
async function loginUser(email, password) {
    const normalizedEmail = String(email || "").trim().toLowerCase();
    const rawPassword = String(password || "");
    const user = DUMMY_USERS.find((entry)=>entry.email === normalizedEmail);
    if (!user || !user.isActive || user.password !== rawPassword) {
        throw new Error("Invalid email or password");
    }
    return toPublicUser(user);
}
async function getUserById(userId) {
    const parsedId = Number(userId);
    const user = DUMMY_USERS.find((entry)=>entry.userId === parsedId && entry.isActive);
    return user ? toPublicUser(user) : null;
}
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/lib/auth.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AUTH_COOKIE_NAME",
    ()=>AUTH_COOKIE_NAME,
    "getSessionUser",
    ()=>getSessionUser,
    "signAuthToken",
    ()=>signAuthToken,
    "verifyAuthToken",
    ()=>verifyAuthToken
]);
/** Verify session/token and get current user. */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
const JWT_SECRET = process.env.JWT_SECRET || "dev-only-secret-change-me";
const AUTH_COOKIE_NAME = "auth_token";
function signAuthToken(payload) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign(payload, JWT_SECRET, {
        expiresIn: "1d"
    });
}
function verifyAuthToken(token) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET);
    } catch  {
        return null;
    }
}
async function getSessionUser() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
    if (!token) return null;
    return verifyAuthToken(token);
}
;
}),
"[project]/src/lib/cors.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "preflight",
    ()=>preflight,
    "withCors",
    ()=>withCors
]);
const DEFAULT_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:3001"
];
function getAllowedOrigins() {
    const fromEnv = process.env.CORS_ALLOWED_ORIGINS;
    if (!fromEnv) return DEFAULT_ALLOWED_ORIGINS;
    return fromEnv.split(",").map((entry)=>entry.trim()).filter(Boolean);
}
function resolveAllowedOrigin(request) {
    const origin = request.headers.get("origin");
    if (!origin) return null;
    const allowedOrigins = getAllowedOrigins();
    return allowedOrigins.includes(origin) ? origin : null;
}
function buildCorsHeaders(request, methods) {
    const origin = resolveAllowedOrigin(request);
    const headers = {
        "Access-Control-Allow-Methods": methods.join(", "),
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
        Vary: "Origin"
    };
    if (origin) {
        headers["Access-Control-Allow-Origin"] = origin;
    }
    return headers;
}
function withCors(request, response, methods = [
    "GET",
    "POST",
    "OPTIONS"
]) {
    const headers = buildCorsHeaders(request, methods);
    Object.entries(headers).forEach(([key, value])=>{
        response.headers.set(key, value);
    });
    return response;
}
function preflight(request, methods = [
    "GET",
    "POST",
    "OPTIONS"
]) {
    return new Response(null, {
        status: 204,
        headers: buildCorsHeaders(request, methods)
    });
}
}),
"[project]/src/app/api/auth/login/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OPTIONS",
    ()=>OPTIONS,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$authService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/authService.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cors.js [app-route] (ecmascript)");
;
;
;
;
async function OPTIONS(req) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["preflight"])(req, [
        "POST",
        "OPTIONS"
    ]);
}
async function POST(req) {
    try {
        const body = await req.json();
        const email = String(body.email || "").trim().toLowerCase();
        const password = String(body.password || "");
        if (!email || !password) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withCors"])(req, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "Email and password are required"
            }, {
                status: 400
            }), [
                "POST",
                "OPTIONS"
            ]);
        }
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$authService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loginUser"])(email, password);
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signAuthToken"])({
            userId: user.userId,
            email: user.email,
            role: user.role
        });
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Login successful",
            user
        }, {
            status: 200
        });
        response.cookies.set({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AUTH_COOKIE_NAME"],
            value: token,
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withCors"])(req, response, [
            "POST",
            "OPTIONS"
        ]);
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withCors"])(req, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: error.message || "Login failed"
        }, {
            status: 401
        }), [
            "POST",
            "OPTIONS"
        ]);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__06tm.w2._.js.map