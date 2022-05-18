"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[19],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),l=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return i.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return t?i.createElement(f,o(o({ref:n},c),{},{components:t})):i.createElement(f,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6427:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),o=["components"],s={id:"cmp",title:"Customize cmp Completion"},p=void 0,l={unversionedId:"recipes/cmp",id:"recipes/cmp",title:"Customize cmp Completion",description:"Customize Keybindings",source:"@site/docs/recipes/cmp.md",sourceDirName:"recipes",slug:"/recipes/cmp",permalink:"/recipes/cmp",tags:[],version:"current",frontMatter:{id:"cmp",title:"Customize cmp Completion"},sidebar:"docs",previous:{title:"Custom Colorscheme",permalink:"/recipes/colorscheme"},next:{title:"Custom VS Code Style Snippets",permalink:"/recipes/snippets"}},c={},m=[{value:"Customize Keybindings",id:"customize-keybindings",level:3},{value:"Customize Source Priority",id:"customize-source-priority",level:3},{value:"Modify Existing Source Options",id:"modify-existing-source-options",level:3},{value:"Add More Sources",id:"add-more-sources",level:3},{value:"Advanced Setup For Filetype and Cmdline",id:"advanced-setup-for-filetype-and-cmdline",level:3}],u={toc:m};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"customize-keybindings"},"Customize Keybindings"),(0,r.kt)("p",null,"Some overrides require access to the plugin itself that you are overriding. This comes up a lot in things adding custom mappings to ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp"),". This can be achieved with the following in your ",(0,r.kt)("inlineCode",{parentName:"p"},"user/init.lua"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    cmp = function(opts)\n      -- opts parameter is the default options table\n      -- the function is lazy loaded so cmp is able to be required\n      local cmp = require "cmp"\n      -- modify the mapping part of the table\n      opts.mapping["<C-x>"] = cmp.mapping.select_next_item()\n\n      -- return the new table to be used\n      return opts\n    end,\n  },\n}\n')),(0,r.kt)("h3",{id:"customize-source-priority"},"Customize Source Priority"),(0,r.kt)("p",null,"We have provided a default set up for prioritizing different completions for ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp"),". These can be easily modified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file:"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This table is an override table and the example below shows the defaults we have provided, so by listing only one of thse sources with a priority will make the others just assume the default value."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"return {\n  cmp = {\n    source_priority = {\n      nvim_lsp = 1000,\n      luasnip = 750,\n      buffer = 500,\n      path = 250,\n    },\n  },\n}\n")),(0,r.kt)("p",null,"By changing the number values you can change the priority (higher number == higher preference). These can also be controlled with boolean values for easily disabling a default source. In this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," translates to high priority of 1000 and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," translates to disabling a source. For example we can do a simple enable for ",(0,r.kt)("inlineCode",{parentName:"p"},"luasnip")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nvim_lsp")," which puts them both at equal hight priority, make ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," less of a priority, and disable ",(0,r.kt)("inlineCode",{parentName:"p"},"buffer"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"return {\n  cmp = {\n    source_priority = {\n      nvim_lsp = true,\n      luasnip = true,\n      path = 500,\n      buffer = false,\n    },\n  },\n}\n")),(0,r.kt)("h3",{id:"modify-existing-source-options"},"Modify Existing Source Options"),(0,r.kt)("p",null,"You may want to modify the options for the default provided ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp")," sources. This can be done by overriding the plugin's ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," function in the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin.init"),". For example, if you want to make the ",(0,r.kt)("inlineCode",{parentName:"p"},"buffer")," source display completions from all available buffers you could have a ",(0,r.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    ["hrsh7th/cmp-buffer"] = {\n      config = function()\n        astronvim.add_user_cmp_source {\n          name = "buffer",\n          option = {\n            get_bufnrs = function()\n              return vim.api.nvim_list_bufs()\n            end,\n          },\n        }\n      end,\n    },\n  },\n}\n')),(0,r.kt)("h3",{id:"add-more-sources"},"Add More Sources"),(0,r.kt)("p",null,"A user may want to include several new sources. We have provided a couple different easy ways to do this using the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins.init")," table to install a ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp")," source plugin and some provided helper functions to add the source and it's priority. This is an example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"user/init.lua")," that adds emoji autocompletion:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    init = {\n      {\n        "hrsh7th/cmp-emoji",\n        after = "nvim-cmp",\n        config = function()\n          astronvim.add_cmp_source("emoji", 700)\n        end,\n      },\n    },\n  },\n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Instead of passing a string and a number to ",(0,r.kt)("inlineCode",{parentName:"p"},"add_cmp_source")," you can pass a single table parameter with a full table with options"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'config = function()\n  astronvim.add_cmp_source({ name = "emoji", priority = 700, keyword_length = 2, max_item_count = 7 })\nend,\n')),(0,r.kt)("p",{parentName:"div"},"Here ",(0,r.kt)("inlineCode",{parentName:"p"},"priority")," is optional as the ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp.source_priority")," table can be used to set the priority. If priority is specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"add_cmp_source")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp.source_priority")," table the ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp.source_priority")," will take precedence."))),(0,r.kt)("p",null,"If you are adding several new sources in your ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins.init")," table this can make it hard to keep track of all of the priorities and how they are in relation to each other, so you can also use a helper function we have provided to extend the ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp.source_priority")," table. For example you can use the following code which adds both ",(0,r.kt)("inlineCode",{parentName:"p"},"emoji")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pandoc_references")," completions to ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    init = {\n      {\n        "hrsh7th/cmp-emoji",\n        after = "nvim-cmp",\n        config = function()\n          astronvim.add_user_cmp_source "emoji"\n        end,\n      },\n      {\n        "mehalter/cmp-pandoc-references",\n        after = "nvim-cmp",\n        config = function()\n          astronvim.add_user_cmp_source "pandoc_references"\n        end,\n      },\n    },\n  },\n\n  cmp = {\n    source_priority = {\n      nvim_lsp = 1000,\n      luasnip = 750,\n      emoji = 700,\n      pandoc_references = 600,\n      buffer = 500,\n      path = 250,\n    },\n  },\n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The default ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp")," sources are optional to provide here because they have default values tied to them, so using the following table would provide the same effect:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"source_priority = {\n  emoji = 700,\n  pandoc_references = 600,\n},\n")))),(0,r.kt)("h3",{id:"advanced-setup-for-filetype-and-cmdline"},"Advanced Setup For Filetype and Cmdline"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cmp")," offers setting up custom sources for both ",(0,r.kt)("inlineCode",{parentName:"p"},"filetype")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cmdline")," (",(0,r.kt)("inlineCode",{parentName:"p"},"cmp.setup.filetype()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp.setup.cmdline()")," respectively). We have added a simple API for this as well in the user configuration. Here is a complete example for customizing these as well as getting the sources with the sources defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"user/init.lua")," ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp.source_priority")," table:"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"From my experience, the filetype detection does not work well with our lazy loading, so it's recommended to disable ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp")," lazy loading if you are using this feature. The way it works in our set up is ",(0,r.kt)("inlineCode",{parentName:"p"},"friendly-snippets")," is lazy loaded when the user goes into insert mode and then ",(0,r.kt)("inlineCode",{parentName:"p"},"LuaSnip")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp")," follow in sequence. Therefore, you want to disable the lazy loading of ",(0,r.kt)("inlineCode",{parentName:"p"},"friendly-snippets")," to get ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp")," to load on startup. This is included in the example below in the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins.init")," table."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    init = {\n      -- disable lazy loading for friendly snippets\n      -- that triggers the loading of cmp\n      ["rafamadriz/friendly-snippets"] = { event = { nil } },\n      -- add more custom sources\n      {\n        "hrsh7th/cmp-emoji",\n        after = "nvim-cmp",\n        config = function()\n          astronvim.add_user_cmp_source "emoji"\n        end,\n      },\n    },\n  },\n  cmp = {\n    -- set cmp source priorities\n    source_priority = {\n      nvim_lsp = 1000,\n      luasnip = 750,\n      emoji = 700,\n      buffer = 500,\n      path = 250,\n    },\n    setup = function()\n      -- load cmp to access it\'s internal functions\n      local cmp = require "cmp"\n      local user_source = astronvim.get_user_cmp_source\n\n      -- store a local variable with a source list to share between filetypes\n      local prose_sources = {\n        user_source "luasnip",\n        user_source "buffer",\n        user_source "emoji",\n      }\n      local config = {\n        -- configure cmp.setup.filetype(filetype, options)\n        filetype = {\n          -- first key is the filetype that you are setting up\n          lua = { -- for lua only load lsp sources and buffer sources as a fallback\n            sources = cmp.config.sources({\n              user_source "nvim_lsp",\n            }, {\n              user_source "buffer",\n            }),\n          },\n          -- markdown and latex share the same sources\n          markdown = { sources = prose_sources },\n          latex = { sources = prose_sources },\n        },\n        -- configure cmp.setup.cmd(source, options)\n        cmdline = {\n          -- first key is the source that you are setting up\n          ["/"] = {\n            -- set up custom mappings\n            mapping = cmp.mapping.preset.cmdline(),\n            -- configure sources normally without getting priority from cmp.source_priority\n            sources = { { name = "buffer" } },\n          },\n          [":"] = {\n            mapping = cmp.mapping.preset.cmdline(),\n            sources = cmp.config.sources({\n              user_source "path",\n            }, {\n              { name = "cmdline" },\n            }),\n          },\n        },\n      }\n      -- return config\n      return config\n    end,\n  },\n}\n')))}d.isMDXComponent=!0}}]);