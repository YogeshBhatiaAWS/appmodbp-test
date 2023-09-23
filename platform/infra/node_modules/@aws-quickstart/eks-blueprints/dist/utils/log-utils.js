"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.userLog = void 0;
const tslog_1 = require("tslog");
/**
 * User log is a logger for user info. Does not display callstack
 */
exports.userLog = new tslog_1.Logger({
    stylePrettyLogs: true,
    name: "user",
    hideLogPositionForProduction: true,
    prettyLogTemplate: "{{logLevelName}} "
});
/**
 * Standard developer logger for troubleshooting. Will leverage sourcemap support.
 */
exports.logger = new tslog_1.Logger({
    stylePrettyLogs: true,
    type: "pretty",
    name: "main",
    minLevel: 4 // info 
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLXV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3V0aWxzL2xvZy11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpQ0FBK0I7QUFFL0I7O0dBRUc7QUFDVSxRQUFBLE9BQU8sR0FBRyxJQUFJLGNBQU0sQ0FBQztJQUM5QixlQUFlLEVBQUUsSUFBSTtJQUNyQixJQUFJLEVBQUUsTUFBTTtJQUNaLDRCQUE0QixFQUFFLElBQUk7SUFDbEMsaUJBQWlCLEVBQUUsbUJBQW1CO0NBQ3pDLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBQ1UsUUFBQSxNQUFNLEdBQUcsSUFBSSxjQUFNLENBQUM7SUFDN0IsZUFBZSxFQUFFLElBQUk7SUFDckIsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsTUFBTTtJQUNaLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtDQUN2QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwidHNsb2dcIjtcblxuLyoqXG4gKiBVc2VyIGxvZyBpcyBhIGxvZ2dlciBmb3IgdXNlciBpbmZvLiBEb2VzIG5vdCBkaXNwbGF5IGNhbGxzdGFja1xuICovXG5leHBvcnQgY29uc3QgdXNlckxvZyA9IG5ldyBMb2dnZXIoe1xuICAgIHN0eWxlUHJldHR5TG9nczogdHJ1ZSxcbiAgICBuYW1lOiBcInVzZXJcIixcbiAgICBoaWRlTG9nUG9zaXRpb25Gb3JQcm9kdWN0aW9uOiB0cnVlLFxuICAgIHByZXR0eUxvZ1RlbXBsYXRlOiBcInt7bG9nTGV2ZWxOYW1lfX0gXCJcbn0pO1xuXG4vKipcbiAqIFN0YW5kYXJkIGRldmVsb3BlciBsb2dnZXIgZm9yIHRyb3VibGVzaG9vdGluZy4gV2lsbCBsZXZlcmFnZSBzb3VyY2VtYXAgc3VwcG9ydC5cbiAqL1xuZXhwb3J0IGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoe1xuICAgIHN0eWxlUHJldHR5TG9nczogdHJ1ZSxcbiAgICB0eXBlOiBcInByZXR0eVwiLFxuICAgIG5hbWU6IFwibWFpblwiLFxuICAgIG1pbkxldmVsOiA0IC8vIGluZm8gXG59KTtcbiJdfQ==