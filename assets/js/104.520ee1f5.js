(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{645:function(t,e,s){"use strict";s.r(e);var a=s(18),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"delete"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[t._v("#")]),t._v(" Delete")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.fs.sftp.Delete"')]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("Delete a file to a SFTP server.")])]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"delete"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.fs.sftp.Delete"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" localhost\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6622")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pass\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/upload/dir1/file.txt"')]),t._v("\n")])])]),s("h2",{attrs:{id:"inputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),s("h3",{attrs:{id:"erroronmissing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#erroronmissing"}},[t._v("#")]),t._v(" "),s("code",[t._v("errorOnMissing")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("boolean")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("raise an error if the file is not found")])]),t._v(" "),s("h3",{attrs:{id:"host"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[t._v("#")]),t._v(" "),s("code",[t._v("host")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("Hostname of the remote server")])]),t._v(" "),s("h3",{attrs:{id:"keyfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyfile"}},[t._v("#")]),t._v(" "),s("code",[t._v("keyfile")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("Private keyfile to login on the source server with ssh")])]),t._v(" "),s("p",[t._v("Must be the ssh key content, not a path")]),t._v(" "),s("h3",{attrs:{id:"passphrase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#passphrase"}},[t._v("#")]),t._v(" "),s("code",[t._v("passphrase")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("Passphrase of the ssh key")])]),t._v(" "),s("h3",{attrs:{id:"password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#password"}},[t._v("#")]),t._v(" "),s("code",[t._v("password")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("Password on the remote server")])]),t._v(" "),s("h3",{attrs:{id:"port"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[t._v("#")]),t._v(" "),s("code",[t._v("port")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("Port of the remote server")])]),t._v(" "),s("h3",{attrs:{id:"uri"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uri"}},[t._v("#")]),t._v(" "),s("code",[t._v("uri")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The file to delete")])]),t._v(" "),s("h3",{attrs:{id:"username"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#username"}},[t._v("#")]),t._v(" "),s("code",[t._v("username")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("Username on the remote server")])]),t._v(" "),s("h2",{attrs:{id:"outputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),s("h3",{attrs:{id:"deleted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deleted"}},[t._v("#")]),t._v(" "),s("code",[t._v("deleted")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("boolean")])])]),t._v(" "),s("blockquote",[s("p",[t._v("If the files was really deleted")])]),t._v(" "),s("h3",{attrs:{id:"uri-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uri-2"}},[t._v("#")]),t._v(" "),s("code",[t._v("uri")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("object")])])]),t._v(" "),s("blockquote",[s("p",[t._v("The deleted uri")])])])}),[],!1,null,null,null);e.default=r.exports}}]);