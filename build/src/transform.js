"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logical_1 = require("./logical");
var predicate_1 = require("./predicate");
function isFilter(t) {
    return t['filter'] !== undefined;
}
exports.isFilter = isFilter;
function isLookup(t) {
    return t['lookup'] !== undefined;
}
exports.isLookup = isLookup;
function isCalculate(t) {
    return t['calculate'] !== undefined;
}
exports.isCalculate = isCalculate;
function isBin(t) {
    return !!t['bin'];
}
exports.isBin = isBin;
function isTimeUnit(t) {
    return t['timeUnit'] !== undefined;
}
exports.isTimeUnit = isTimeUnit;
function isAggregate(t) {
    return t['aggregate'] !== undefined;
}
exports.isAggregate = isAggregate;
function normalizeTransform(transform) {
    return transform.map(function (t) {
        if (isFilter(t)) {
            return {
                filter: logical_1.normalizeLogicalOperand(t.filter, predicate_1.normalizePredicate)
            };
        }
        return t;
    });
}
exports.normalizeTransform = normalizeTransform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHFDQUFrRTtBQUNsRSx5Q0FBMEQ7QUFrQjFELGtCQUF5QixDQUFZO0lBQ25DLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssU0FBUyxDQUFDO0FBQ25DLENBQUM7QUFGRCw0QkFFQztBQXlIRCxrQkFBeUIsQ0FBWTtJQUNuQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsQ0FBQztBQUNuQyxDQUFDO0FBRkQsNEJBRUM7QUFFRCxxQkFBNEIsQ0FBWTtJQUN0QyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLFNBQVMsQ0FBQztBQUN0QyxDQUFDO0FBRkQsa0NBRUM7QUFFRCxlQUFzQixDQUFZO0lBQ2hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BCLENBQUM7QUFGRCxzQkFFQztBQUVELG9CQUEyQixDQUFZO0lBQ3JDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssU0FBUyxDQUFDO0FBQ3JDLENBQUM7QUFGRCxnQ0FFQztBQUVELHFCQUE0QixDQUFZO0lBQ3RDLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssU0FBUyxDQUFDO0FBQ3RDLENBQUM7QUFGRCxrQ0FFQztBQUlELDRCQUFtQyxTQUFzQjtJQUN2RCxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7UUFDcEIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLENBQUM7Z0JBQ0wsTUFBTSxFQUFFLGlDQUF1QixDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsOEJBQWtCLENBQUM7YUFDOUQsQ0FBQztRQUNKLENBQUM7UUFDRCxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBVEQsZ0RBU0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FnZ3JlZ2F0ZU9wfSBmcm9tICcuL2FnZ3JlZ2F0ZSc7XG5pbXBvcnQge0JpblBhcmFtc30gZnJvbSAnLi9iaW4nO1xuaW1wb3J0IHtEYXRhfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHtMb2dpY2FsT3BlcmFuZCwgbm9ybWFsaXplTG9naWNhbE9wZXJhbmR9IGZyb20gJy4vbG9naWNhbCc7XG5pbXBvcnQge25vcm1hbGl6ZVByZWRpY2F0ZSwgUHJlZGljYXRlfSBmcm9tICcuL3ByZWRpY2F0ZSc7XG5pbXBvcnQge1RpbWVVbml0fSBmcm9tICcuL3RpbWV1bml0JztcblxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlclRyYW5zZm9ybSB7XG4gIC8qKlxuICAgKiBUaGUgYGZpbHRlcmAgcHJvcGVydHkgbXVzdCBiZSBvbmUgb2YgdGhlIHByZWRpY2F0ZSBkZWZpbml0aW9uczpcbiAgICogKDEpIGFuIFtleHByZXNzaW9uXSh0eXBlcy5odG1sI2V4cHJlc3Npb24pIHN0cmluZyxcbiAgICogd2hlcmUgYGRhdHVtYCBjYW4gYmUgdXNlZCB0byByZWZlciB0byB0aGUgY3VycmVudCBkYXRhIG9iamVjdDtcbiAgICogKDIpIG9uZSBvZiB0aGUgZmllbGQgcHJlZGljYXRlczogW2VxdWFsIHByZWRpY2F0ZV0oZmlsdGVyLmh0bWwjZXF1YWwtcHJlZGljYXRlKTtcbiAgICogW3JhbmdlIHByZWNpZGF0ZV0oZmlsdGVyLmh0bWwjcmFuZ2UtcHJlZGljYXRlKSwgW29uZS1vZiBwcmVkaWNhdGVdKGZpbHRlci5odG1sI29uZS1vZi1wcmVkaWNhdGUpO1xuICAgKiAoMykgYSBbc2VsZWN0aW9uIHByZWRpY2F0ZV0oZmlsdGVyLmh0bWwjc2VsZWN0aW9uLXByZWRpY2F0ZSk7XG4gICAqIG9yICg0KSBhIGxvZ2ljYWwgb3BlcmFuZCB0aGF0IGNvbWJpbmVzICgxKSwgKDIpLCBvciAoMykuXG4gICAqL1xuICAvLyBUT0RPOiBodHRwczovL2dpdGh1Yi5jb20vdmVnYS92ZWdhLWxpdGUvaXNzdWVzLzI5MDFcbiAgZmlsdGVyOiBMb2dpY2FsT3BlcmFuZDxQcmVkaWNhdGU+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGaWx0ZXIodDogVHJhbnNmb3JtKTogdCBpcyBGaWx0ZXJUcmFuc2Zvcm0ge1xuICByZXR1cm4gdFsnZmlsdGVyJ10gIT09IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYWxjdWxhdGVUcmFuc2Zvcm0ge1xuICAvKipcbiAgICogQSBbZXhwcmVzc2lvbl0odHlwZXMuaHRtbCNleHByZXNzaW9uKSBzdHJpbmcuIFVzZSB0aGUgdmFyaWFibGUgYGRhdHVtYCB0byByZWZlciB0byB0aGUgY3VycmVudCBkYXRhIG9iamVjdC5cbiAgICovXG4gIGNhbGN1bGF0ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZmllbGQgZm9yIHN0b3JpbmcgdGhlIGNvbXB1dGVkIGZvcm11bGEgdmFsdWUuXG4gICAqL1xuICBhczogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJpblRyYW5zZm9ybSB7XG4gIC8qKlxuICAgKiBBbiBvYmplY3QgaW5kaWNhdGluZyBiaW4gcHJvcGVydGllcywgb3Igc2ltcGx5IGB0cnVlYCBmb3IgdXNpbmcgZGVmYXVsdCBiaW4gcGFyYW1ldGVycy5cbiAgICovXG4gIGJpbjogYm9vbGVhbiB8IEJpblBhcmFtcztcblxuICAvKipcbiAgICogVGhlIGRhdGEgZmllbGQgdG8gYmluLlxuICAgKi9cbiAgZmllbGQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG91dHB1dCBmaWVsZHMgYXQgd2hpY2ggdG8gd3JpdGUgdGhlIHN0YXJ0IGFuZCBlbmQgYmluIHZhbHVlcy5cbiAgICovXG4gIGFzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGltZVVuaXRUcmFuc2Zvcm0ge1xuICAvKipcbiAgICogVGhlIHRpbWVVbml0LlxuICAgKi9cbiAgdGltZVVuaXQ6IFRpbWVVbml0O1xuXG4gIC8qKlxuICAgKiBUaGUgZGF0YSBmaWVsZCB0byBhcHBseSB0aW1lIHVuaXQuXG4gICAqL1xuICBmaWVsZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgb3V0cHV0IGZpZWxkIHRvIHdyaXRlIHRoZSB0aW1lVW5pdCB2YWx1ZS5cbiAgICovXG4gIGFzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWdncmVnYXRlVHJhbnNmb3JtIHtcbiAgLyoqXG4gICAqIEFycmF5IG9mIG9iamVjdHMgdGhhdCBkZWZpbmUgZmllbGRzIHRvIGFnZ3JlZ2F0ZS5cbiAgICovXG4gIGFnZ3JlZ2F0ZTogQWdncmVnYXRlZEZpZWxkRGVmW107XG5cbiAgLyoqXG4gICAqIFRoZSBkYXRhIGZpZWxkcyB0byBncm91cCBieS4gSWYgbm90IHNwZWNpZmllZCwgYSBzaW5nbGUgZ3JvdXAgY29udGFpbmluZyBhbGwgZGF0YSBvYmplY3RzIHdpbGwgYmUgdXNlZC5cbiAgICovXG4gIGdyb3VwYnk/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZ2dyZWdhdGVkRmllbGREZWYge1xuICAvKipcbiAgICogVGhlIGFnZ3JlZ2F0aW9uIG9wZXJhdGlvbnMgdG8gYXBwbHkgdG8gdGhlIGZpZWxkcywgc3VjaCBhcyBzdW0sIGF2ZXJhZ2Ugb3IgY291bnQuXG4gICAqIFNlZSB0aGUgW2Z1bGwgbGlzdCBvZiBzdXBwb3J0ZWQgYWdncmVnYXRpb24gb3BlcmF0aW9uc10oaHR0cHM6Ly92ZWdhLmdpdGh1Yi5pby92ZWdhLWxpdGUvZG9jcy9hZ2dyZWdhdGUuaHRtbCNvcHMpXG4gICAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgb3A6IEFnZ3JlZ2F0ZU9wO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF0YSBmaWVsZCBmb3Igd2hpY2ggdG8gY29tcHV0ZSBhZ2dyZWdhdGUgZnVuY3Rpb24uXG4gICAqL1xuICBmaWVsZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgb3V0cHV0IGZpZWxkIG5hbWVzIHRvIHVzZSBmb3IgZWFjaCBhZ2dyZWdhdGVkIGZpZWxkLlxuICAgKi9cbiAgYXM6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb29rdXBEYXRhIHtcbiAgLyoqXG4gICAqIFNlY29uZGFyeSBkYXRhIHNvdXJjZSB0byBsb29rdXAgaW4uXG4gICAqL1xuICBkYXRhOiBEYXRhO1xuICAvKipcbiAgICogS2V5IGluIGRhdGEgdG8gbG9va3VwLlxuICAgKi9cbiAga2V5OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBGaWVsZHMgaW4gZm9yZWlnbiBkYXRhIHRvIGxvb2t1cC5cbiAgICogSWYgbm90IHNwZWNpZmljaWVkLCB0aGUgZW50aXJlIG9iamVjdCBpcyBxdWVyaWVkLlxuICAgKi9cbiAgZmllbGRzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9va3VwVHJhbnNmb3JtIHtcbiAgLyoqXG4gICAqIEtleSBpbiBwcmltYXJ5IGRhdGEgc291cmNlLlxuICAgKi9cbiAgbG9va3VwOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNlY29uZGFyeSBkYXRhIHJlZmVyZW5jZS5cbiAgICovXG4gIGZyb206IExvb2t1cERhdGE7XG5cbiAgLyoqXG4gICAqIFRoZSBmaWVsZCBvciBmaWVsZHMgZm9yIHN0b3JpbmcgdGhlIGNvbXB1dGVkIGZvcm11bGEgdmFsdWUuXG4gICAqIElmIGBmcm9tLmZpZWxkc2AgaXMgc3BlY2lmaWVkLCB0aGUgdHJhbnNmb3JtIHdpbGwgdXNlIHRoZSBzYW1lIG5hbWVzIGZvciBgYXNgLlxuICAgKiBJZiBgZnJvbS5maWVsZHNgIGlzIG5vdCBzcGVjaWZpZWQsIGBhc2AgaGFzIHRvIGJlIGEgc3RyaW5nIGFuZCB3ZSBwdXQgdGhlIHdob2xlIG9iamVjdCBpbnRvIHRoZSBkYXRhIHVuZGVyIHRoZSBzcGVjaWZpZWQgbmFtZS5cbiAgICovXG4gIGFzPzogc3RyaW5nIHwgc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIHRvIHVzZSBpZiBsb29rdXAgZmFpbHMuXG4gICAqXG4gICAqIF9fRGVmYXVsdCB2YWx1ZTpfXyBgbnVsbGBcbiAgICovXG4gIGRlZmF1bHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xvb2t1cCh0OiBUcmFuc2Zvcm0pOiB0IGlzIExvb2t1cFRyYW5zZm9ybSB7XG4gIHJldHVybiB0Wydsb29rdXAnXSAhPT0gdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDYWxjdWxhdGUodDogVHJhbnNmb3JtKTogdCBpcyBDYWxjdWxhdGVUcmFuc2Zvcm0ge1xuICByZXR1cm4gdFsnY2FsY3VsYXRlJ10gIT09IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmluKHQ6IFRyYW5zZm9ybSk6IHQgaXMgQmluVHJhbnNmb3JtIHtcbiAgcmV0dXJuICEhdFsnYmluJ107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RpbWVVbml0KHQ6IFRyYW5zZm9ybSk6IHQgaXMgVGltZVVuaXRUcmFuc2Zvcm0ge1xuICByZXR1cm4gdFsndGltZVVuaXQnXSAhPT0gdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBZ2dyZWdhdGUodDogVHJhbnNmb3JtKTogdCBpcyBBZ2dyZWdhdGVUcmFuc2Zvcm0ge1xuICByZXR1cm4gdFsnYWdncmVnYXRlJ10gIT09IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IHR5cGUgVHJhbnNmb3JtID0gRmlsdGVyVHJhbnNmb3JtIHwgQ2FsY3VsYXRlVHJhbnNmb3JtIHwgTG9va3VwVHJhbnNmb3JtIHwgQmluVHJhbnNmb3JtIHwgVGltZVVuaXRUcmFuc2Zvcm0gfCBBZ2dyZWdhdGVUcmFuc2Zvcm07XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVUcmFuc2Zvcm0odHJhbnNmb3JtOiBUcmFuc2Zvcm1bXSkge1xuICByZXR1cm4gdHJhbnNmb3JtLm1hcCh0ID0+IHtcbiAgICBpZiAoaXNGaWx0ZXIodCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpbHRlcjogbm9ybWFsaXplTG9naWNhbE9wZXJhbmQodC5maWx0ZXIsIG5vcm1hbGl6ZVByZWRpY2F0ZSlcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9KTtcbn1cbiJdfQ==