import Foundation

struct ThemeBridge {
    static func color(_ key: String, mode: String) -> String {
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
