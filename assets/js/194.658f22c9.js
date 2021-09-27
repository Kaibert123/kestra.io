(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{1025:function(t,s,e){"use strict";e.r(s);var a=e(9),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",[t._v("\n     AbstractPython\n")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.core.tasks.scripts.AbstractPython"')]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("Execute a Python script")])]),t._v(" "),e("p",[t._v("With this Python task, we can execute a full python script."),e("br"),t._v("\nThe task will create a fresh "),e("code",[t._v("virtualenv")]),t._v(" for every tasks and allow you to install some python package define in "),e("code",[t._v("requirements")]),t._v(" property.")]),t._v(" "),e("p",[t._v("By convention, you need to define at least a "),e("code",[t._v("main.py")]),t._v(" files in "),e("code",[t._v("inputFiles")]),t._v(" that will be the script used."),e("br"),t._v("\nBut you are also able to add as many script as you need in "),e("code",[t._v("inputFiles")]),t._v(".")]),t._v(" "),e("p",[t._v("You can also add a "),e("code",[t._v("pip.conf")]),t._v(" in "),e("code",[t._v("inputFiles")]),t._v(" to customize the pip download of dependencies (like a private registry).")]),t._v(" "),e("p",[t._v("You can send outputs & metrics from your python script that can be used by others tasks. In order to help, we inject a python package directly on the working dir.Here is an example usage:")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" kestra "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Kestra\nKestra"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("outputs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'int'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bool'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'float'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.65")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nKestra"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("counter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'count'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tag1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'i'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tag2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'win'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nKestra"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timer1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lambda")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tag1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'i'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tag2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lost'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nKestra"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timer2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.12")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tag1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'i'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tag2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'destroy'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("blockquote",[e("p",[t._v("Execute a python script")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abstract_python"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.core.tasks.scripts.AbstractPython"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputFiles")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data.json")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n          {"status": "OK"}')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("main.py")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n    from kestra import Kestra\n    import json\n    import requests\n    import sys\n    result = json.loads(open(sys.argv[1]).read())\n    print(f\"python script {result['status']}\")\n    response = requests.get('http://google.com')\n    print(response.status_code)\n    Kestra.outputs({'status': response.status_code, 'text': response.text})")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pip.conf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n    # some specific pip repository configuration")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" data.json\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("requirements")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" requests\n")])])]),e("h2",{attrs:{id:"properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),e("h3",{attrs:{id:"args"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#args"}},[t._v("#")]),t._v(" "),e("code",[t._v("args")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("array")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("Python command args")])]),t._v(" "),e("p",[t._v("Arguments list to pass to main python script")]),t._v(" "),e("h3",{attrs:{id:"dockeroptions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockeroptions"}},[t._v("#")]),t._v(" "),e("code",[t._v("dockerOptions")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[e("a",{attrs:{href:"#dockeroptions"}},[t._v("DockerOptions")])])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("Docker options when using runner "),e("code",[t._v("DOCKER")])])]),t._v(" "),e("h3",{attrs:{id:"env"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[t._v("#")]),t._v(" "),e("code",[t._v("env")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("object")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("Additional environnements variable to add for current process.")])]),t._v(" "),e("h3",{attrs:{id:"exitonfailed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exitonfailed"}},[t._v("#")]),t._v(" "),e("code",[t._v("exitOnFailed")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("boolean")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Default:")]),t._v(" "),e("code",[t._v("true")])])]),t._v(" "),e("blockquote",[e("p",[t._v("Exit if any non true return value")])]),t._v(" "),e("p",[t._v("This tells bash that it should exit the script if any statement returns a non-true return value."),e("br"),t._v("\nThe benefit of using -e is that it prevents errors snowballing into serious issues when they could have been caught earlier.")]),t._v(" "),e("h3",{attrs:{id:"files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[t._v("#")]),t._v(" "),e("code",[t._v("files")])]),t._v(" "),e("p",[t._v("🔒 "),e("em",[t._v("Deprecated")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("array")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("The list of files that will be uploaded to internal storage,")])]),t._v(" "),e("p",[t._v("use "),e("code",[t._v("outputFiles")]),t._v(" property instead")]),t._v(" "),e("h3",{attrs:{id:"inputfiles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inputfiles"}},[t._v("#")]),t._v(" "),e("code",[t._v("inputFiles")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("object")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("Input files are extra files supplied by user that make it simpler organize code.")])]),t._v(" "),e("p",[t._v("Describe a files map that will be written and usable in execution context. In python execution context is in a temp folder, for bash scripts, you can reach files using a workingDir variable like 'source "+t._s(t.workingDir)+"/myfile.sh'")]),t._v(" "),e("h3",{attrs:{id:"interpreter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interpreter"}},[t._v("#")]),t._v(" "),e("code",[t._v("interpreter")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Default:")]),t._v(" "),e("code",[t._v("/bin/sh")])]),t._v(" "),e("li",[e("strong",[t._v("Min length:")]),t._v(" "),e("code",[t._v("1")])])]),t._v(" "),e("blockquote",[e("p",[t._v("Interpreter to used")])]),t._v(" "),e("h3",{attrs:{id:"interpreterargs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interpreterargs"}},[t._v("#")]),t._v(" "),e("code",[t._v("interpreterArgs")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("array")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),e("li",[e("strong",[t._v("Default:")]),t._v(" "),e("code",[t._v("[-c]")])])]),t._v(" "),e("blockquote",[e("p",[t._v("Interpreter args used")])]),t._v(" "),e("h3",{attrs:{id:"outputfiles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#outputfiles"}},[t._v("#")]),t._v(" "),e("code",[t._v("outputFiles")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("array")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("Output file list that will be uploaded to internal storage")])]),t._v(" "),e("p",[t._v("List of key that will generate temporary files."),e("br"),t._v("\nOn the command, just can use with special variable named "),e("code",[t._v("outputFiles.key")]),t._v("."),e("br"),t._v("\nIf you add a files with "),e("code",[t._v('["first"]')]),t._v(", you can use the special vars "),e("code",[t._v("echo 1 >> {[ outputFiles.first }}")]),t._v(" and you used on others tasks using "),e("code",{pre:!0},[t._v("{{  outputs.task-id.files.first  }}")])]),t._v(" "),e("h3",{attrs:{id:"outputsfiles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#outputsfiles"}},[t._v("#")]),t._v(" "),e("code",[t._v("outputsFiles")])]),t._v(" "),e("p",[t._v("🔒 "),e("em",[t._v("Deprecated")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("array")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("Deprecated Output file")])]),t._v(" "),e("p",[t._v("use "),e("code",[t._v("outputFiles")])]),t._v(" "),e("h3",{attrs:{id:"pythonpath"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pythonpath"}},[t._v("#")]),t._v(" "),e("code",[t._v("pythonPath")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Default:")]),t._v(" "),e("code",[t._v("/usr/bin/python3")])]),t._v(" "),e("li",[e("strong",[t._v("Min length:")]),t._v(" "),e("code",[t._v("1")])])]),t._v(" "),e("blockquote",[e("p",[t._v("The python interpreter to use")])]),t._v(" "),e("p",[t._v("Set the python interpreter path to use")]),t._v(" "),e("h3",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" "),e("code",[t._v("requirements")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("array")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("Requirements are python dependencies to add to the python execution process")])]),t._v(" "),e("p",[t._v("Python dependencies list to setup in the virtualenv, in the same format than requirements.txt")]),t._v(" "),e("h3",{attrs:{id:"runner"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#runner"}},[t._v("#")]),t._v(" "),e("code",[t._v("runner")])]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Dynamic:")]),t._v(" ❌")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Required:")]),t._v(" ✔️")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Default:")]),t._v(" "),e("code",[t._v("PROCESS")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Possible Values:")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("PROCESS")])]),t._v(" "),e("li",[e("code",[t._v("DOCKER")])])])])]),t._v(" "),e("blockquote",[e("p",[t._v("Runner to use")])]),t._v(" "),e("h2",{attrs:{id:"definitions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[t._v("#")]),t._v(" Definitions")]),t._v(" "),e("h3",{attrs:{id:"dockeroptions-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockeroptions-2"}},[t._v("#")]),t._v(" "),e("code",[t._v("DockerOptions")])]),t._v(" "),e("h4",{attrs:{id:"dockerconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerconfig"}},[t._v("#")]),t._v(" "),e("code",[t._v("dockerConfig")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("Docker config file")])]),t._v(" "),e("p",[t._v("Full file that can be used to configure private registries, ...")]),t._v(" "),e("h4",{attrs:{id:"dockerhost"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerhost"}},[t._v("#")]),t._v(" "),e("code",[t._v("dockerHost")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),e("li",[e("strong",[t._v("Default:")]),t._v(" "),e("code",[t._v("unix:///var/run/docker.sock")])])]),t._v(" "),e("blockquote",[e("p",[t._v("Docker api uri")])]),t._v(" "),e("h4",{attrs:{id:"entrypoint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint"}},[t._v("#")]),t._v(" "),e("code",[t._v("entryPoint")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("array")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("Docker entrypoint to use")])]),t._v(" "),e("h4",{attrs:{id:"extrahosts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extrahosts"}},[t._v("#")]),t._v(" "),e("code",[t._v("extraHosts")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("array")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("Docker extra host to use")])]),t._v(" "),e("h4",{attrs:{id:"image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#image"}},[t._v("#")]),t._v(" "),e("code",[t._v("image")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Min length:")]),t._v(" "),e("code",[t._v("1")])])]),t._v(" "),e("blockquote",[e("p",[t._v("Docker image to use")])]),t._v(" "),e("h4",{attrs:{id:"user"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[t._v("#")]),t._v(" "),e("code",[t._v("user")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("Docker user to use")])])])}),[],!1,null,null,null);s.default=r.exports}}]);