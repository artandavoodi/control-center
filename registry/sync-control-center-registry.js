/** Build canonical registry outputs through the existing source owners, without deletion or copy trees. */
import {syncTokens} from './tokens/sync-tokens.js';
import {iconCompiler} from './icons/compiler/icon-compiler.js';
import {publicIconExporter} from './icons/exporters/public/public-icon-exporter.js';
import {runtimeIconExporter} from './icons/exporters/runtime/runtime-icon-exporter.js';
import {swiftIconExporter} from './icons/exporters/swift/swift-icon-exporter.js';
const icons=iconCompiler.load({cleanDuplicates:false});
// Export preflights every registered mirror before the first icon is replaced.
const mirrors=publicIconExporter.export();
const tokens=syncTokens();
console.log('[Control Center Registry Synchronized]',{icons:icons.totalIcons,mirrors,tokens:tokens.tokens,runtime:runtimeIconExporter.export(),swift:swiftIconExporter.export()});
