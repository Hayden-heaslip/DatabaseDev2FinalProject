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
"[project]/src/services/itemService.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/services/itemService.js'\n\nExpected ',', got ':'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/lib/apiResponse.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Standard API response helpers
 * 
 * Purpose: Consistent response format across all API endpoints.
 * All endpoints should return either success() or error() responses.
 * 
 * Response format:
 * Success: { success: true, data: {...}, status: 200 }
 * Error: { success: false, error: "message", status: 400/401/403/500 }
 * 
 * Usage in routes:
 * export async function GET() {
 *   return success({ items: [...] });
 * }
 * 
 * export async function POST() {
 *   try {
 *     // do something
 *     return success({ id: 123 }, 201);
 *   } catch (error) {
 *     return error('Invalid input', 400);
 *   }
 * }
 */ __turbopack_context__.s([
    "error",
    ()=>error,
    "forbidden",
    ()=>forbidden,
    "notFound",
    ()=>notFound,
    "serverError",
    ()=>serverError,
    "success",
    ()=>success,
    "unauthorized",
    ()=>unauthorized
]);
function success(data, status = 200) {
    return Response.json({
        success: true,
        data
    }, {
        status
    });
}
function error(message, status = 400) {
    return Response.json({
        success: false,
        error: message
    }, {
        status
    });
}
function unauthorized(message = 'Unauthorized') {
    return error(message, 401);
}
function forbidden(message = 'Forbidden') {
    return error(message, 403);
}
function notFound(message = 'Not found') {
    return error(message, 404);
}
function serverError(message = 'Internal server error') {
    return error(message, 500);
}
}),
"[project]/src/app/api/items/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$itemService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/itemService.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiResponse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiResponse.js [app-route] (ecmascript)");
;
;
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '20');
        const search = searchParams.get('search') || '';
        const sortBy = searchParams.get('sortBy') || 'title';
        const sortOrder = searchParams.get('sortOrder') || 'asc';
        const { items, total } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$itemService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["itemService"].listItems({
            page,
            limit,
            search,
            sortBy,
            sortOrder
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiResponse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["success"])({
            items,
            total
        });
    } catch (err) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiResponse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["error"])(err.message, err.statusCode || 500);
    }
}
async function POST(request) {
    try {
        const body = await request.json();
        const item = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$itemService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["itemService"].createItem(body);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiResponse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["success"])(item, 201);
    } catch (err) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiResponse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["error"])(err.message, err.statusCode || 500);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__07x-cpo._.js.map