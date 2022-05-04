"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[426],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),p=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(t),f=o,g=m["".concat(a,".").concat(f)]||m[f]||u[f]||l;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=m;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9882:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=t(7462),o=t(3366),l=(t(7294),t(3905)),i=["components"],c={id:"telescope_theme",title:"NvChad Telescope Theme"},a=void 0,p={unversionedId:"recipes/telescope_theme",id:"recipes/telescope_theme",title:"NvChad Telescope Theme",description:"These code snippets make the telescope look like the default NvChad telescope theme:",source:"@site/docs/recipes/telescope_theme.md",sourceDirName:"recipes",slug:"/recipes/telescope_theme",permalink:"/recipes/telescope_theme",tags:[],version:"current",frontMatter:{id:"telescope_theme",title:"NvChad Telescope Theme"},sidebar:"docs",previous:{title:"Manually Add LSP",permalink:"/recipes/manual_lsp"},next:{title:"Unattended Installation",permalink:"/recipes/unattended_install"}},s={},u=[],m={toc:u};function f(e){var n=e.components,c=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,c,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"These code snippets make the telescope look like the default NvChad telescope theme:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Screenshot of telescope theme",src:t(9810).Z,width:"1920",height:"1080"})),(0,l.kt)("p",null,"Create file ",(0,l.kt)("inlineCode",{parentName:"p"},"user/theme.lua"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local M = {}\n\nfunction M.hi_colors()\n  local colors = {\n    bg = "#16161D",\n    bg_alt = "#1F1F28",\n    fg = "#DCD7BA",\n    green = "#76946A",\n    red = "#E46876",\n  }\n  local color_binds = {\n    bg = { group = "NormalFloat", property = "background" },\n    bg_alt = { group = "Cursor", property = "foreground" },\n    fg = { group = "Cursor", property = "background" },\n    green = { group = "diffAdded", property = "foreground" },\n    red = { group = "diffRemoved", property = "foreground" },\n  }\n  local function get_hl_by_name(name)\n    local ret = vim.api.nvim_get_hl_by_name(name.group, true)\n    return string.format("#%06x", ret[name.property])\n  end\n  for k, v in pairs(color_binds) do\n    local found, color = pcall(get_hl_by_name, v)\n    if found then\n      colors[k] = color\n    end\n  end\n  return colors\nend\n\nfunction M.telescope_theme()\n  local colors = M.hi_colors()\n  vim.api.nvim_set_hl(0, "TelescopeBorder", { fg = colors.bg_alt, bg = colors.bg })\n  vim.api.nvim_set_hl(0, "TelescopePromptBorder", { fg = colors.bg, bg = colors.bg })\n  vim.api.nvim_set_hl(0, "TelescopePromptNormal", { fg = colors.fg, bg = colors.bg_alt })\n  vim.api.nvim_set_hl(0, "TelescopePromptPrefix", { fg = colors.red, bg = colors.bg })\n  vim.api.nvim_set_hl(0, "TelescopePreviewTitle", { fg = colors.bg, bg = colors.green })\n  vim.api.nvim_set_hl(0, "TelescopePromptTitle", { fg = colors.bg, bg = colors.red })\n  vim.api.nvim_set_hl(0, "TelescopeResultsTitle", { fg = colors.bg, bg = colors.bg })\n  vim.api.nvim_set_hl(0, "TelescopeResultsBorder", { fg = colors.bg, bg = colors.bg })\n  vim.api.nvim_set_hl(0, "LvimInfoHeader", { fg = colors.bg, bg = colors.green })\n  vim.api.nvim_set_hl(0, "LvimInfoIdentifier", { fg = colors.red, bg = colors.bg_alt })\n  vim.api.nvim_set_hl(0, "TelescopeSelection", { bg = colors.bg_alt })\n  vim.api.nvim_set_hl(0, "TelescopeNormal", { bg = colors.bg })\nend\n\nreturn M\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"user/init.lua"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    telescope = {\n      defaults = {\n        prompt_prefix = "\uf46b  ",\n        borderchars = {\n          prompt = { "\u2500", "\u2502", "\u2500", "\u2502", "\u256d", "\u256e", "\u256f", "\u2570" },\n          results = { "\u2500", "\u2590", "\u2500", "\u2502", "\u256d", "\u2590", "\u2590", "\u2570" },\n          preview = { " ", "\u2502", " ", "\u258c", "\u258c", "\u256e", "\u256f", "\u258c" },\n        },\n        selection_caret = "  ",\n        layout_config = {\n          width = 0.90,\n          height = 0.85,\n          preview_cutoff = 120,\n          horizontal = {\n            preview_width = function(_, cols, _)\n              return math.floor(cols * 0.6)\n            end,\n          },\n          vertical = {\n            width = 0.9,\n            height = 0.95,\n            preview_height = 0.5,\n          },\n          flex = {\n            horizontal = {\n              preview_width = 0.9,\n            },\n          },\n        },\n        layout_strategy = "horizontal",\n      },\n    },\n  },\n\n  polish = function()\n    vim.api.nvim_create_autocmd({ "VimEnter", "ColorScheme" }, {\n      desc = "Set up telescope theme",\n      pattern = "*",\n      callback = require("user.theme").telescope_theme,\n    })\n  end,\n}\n')))}f.isMDXComponent=!0},9810:function(e,n,t){n.Z=t.p+"assets/images/telescope_theme-19d49abdba16eeccf39466f0b9755f0b.png"}}]);