import Foundation

struct ThemeBridge {
    static func color(_ key: String, mode: String, registry: [String: Any]? = nil) -> String {
        if let themes = registry?["themes"] as? [String: Any],
           let modeTheme = themes[mode] as? [String: Any],
           let token = modeTheme[key] as? [String: Any],
           let ref = token["ref"] as? String {
            return ref
        }

        let dark: [String: String] = [
            "background": "#0B0F14",
            "surface": "#121821"
        ]
        let light: [String: String] = [
            "background": "#FFFFFF",
            "surface": "#F2F4F8"
        ]

        let palette = (mode == "light") ? light : dark
        return palette[key] ?? ""
    }
}
