Search.setIndex({"docnames": ["API/engines", "API/job-balancers", "API/jobs", "API/processor", "api-reference", "content", "contributors-guide", "getting-started", "intro", "main_page", "markdown", "notebooks", "release-notes", "user-guide/intro", "user-guide/job-definition", "user-guide/job-running", "user-guide/job-scheduling", "user-guide/logger"], "filenames": ["API/engines.md", "API/job-balancers.md", "API/jobs.md", "API/processor.md", "api-reference.md", "content.md", "contributors-guide.md", "getting-started.md", "intro.md", "main_page.md", "markdown.md", "notebooks.ipynb", "release-notes.md", "user-guide/intro.md", "user-guide/job-definition.md", "user-guide/job-running.md", "user-guide/job-scheduling.md", "user-guide/logger.md"], "titles": ["<code class=\"docutils literal notranslate\"><span class=\"pre\">jobdispatcher.engines</span></code>", "<code class=\"docutils literal notranslate\"><span class=\"pre\">jobdispatcher.job_balancers</span></code>", "<code class=\"docutils literal notranslate\"><span class=\"pre\">jobdispatcher.jobs</span></code>", "<code class=\"docutils literal notranslate\"><span class=\"pre\">jobdispatcher.processor</span></code>", "API reference", "Content in Jupyter Book", "Contributors guide", "Getting started", "JobDispatcher Docs", "&lt;no title&gt;", "Markdown Files", "Content with notebooks", "Release notes", "JobDispatcher User Guide", "Job definition", "Job running", "Job scheduling", "Logging"], "terms": {"class": [0, 1, 2, 3], "multiprocessingengin": 0, "cores_per_job": [0, 3, 15], "1": [0, 3, 7, 11, 15], "threadingengin": 0, "jobbalanc": 1, "maxcor": [1, 3, 7, 15], "determin": [1, 7], "which": [1, 7, 10], "job": [1, 3, 8, 13], "should": [1, 7, 15], "provid": [1, 7, 8, 13, 14, 16], "next": [1, 8], "engin": [1, 3, 8], "run": [1, 3, 8, 10, 13, 14], "unavailable_cor": 1, "candidate_jobs_list": 1, "balanc": 1, "return": [1, 2, 3, 7, 14], "list": [1, 2, 3, 14, 16], "from": [1, 7, 11, 14], "paramet": [1, 2, 3], "running_jobs_list": 1, "type": [1, 2, 3, 15], "descript": [1, 8], "rais": 1, "valueerror": 1, "name": [2, 7, 10, 11, 14], "function": [2, 3, 7, 8, 10, 14, 15], "argument": [2, 14, 15], "factori": 2, "keyword_argu": [2, 14], "core": [2, 14, 16], "properti": 2, "object": [2, 7, 8, 15], "repres": [2, 14], "its": [2, 8, 10, 14], "callabl": 2, "A": [2, 3, 8], "call": [2, 7, 10, 11], "ani": [2, 3, 10], "contain": 2, "posit": [2, 7, 14], "dict": 2, "str": 2, "ditionari": 2, "keyword": [2, 7, 14, 15], "int": [2, 3], "number": [2, 3, 7, 14, 16], "us": [2, 7, 8, 13, 14, 16], "jobs_list": 3, "multiprocess": [3, 7, 8], "queue": 3, "differ": [3, 7, 10], "execut": [3, 7, 8, 16], "them": [3, 7], "parallel": [3, 7, 15], "add": [3, 10], "new": [3, 7], "instanc": [3, 7, 14, 16], "none": 3, "There": [5, 10, 11], "ar": [5, 7, 16], "mani": [5, 7, 10], "wai": [5, 7, 8], "write": [5, 7, 10], "thi": [5, 7, 10, 11, 15, 16], "short": [5, 7], "section": 5, "cover": [5, 8], "few": 5, "tip": 5, "how": [5, 7], "do": [5, 7, 10, 11, 15], "so": [5, 7, 10], "welcom": 7, "introduct": 7, "jobdispatch": [7, 10, 14, 15], "In": [7, 10], "page": [7, 10], "you": [7, 10, 11], "find": 7, "all": [7, 8, 10, 15], "inform": [7, 8, 10, 11, 13], "launch": 7, "your": [7, 11], "batch": 7, "structur": [7, 10], "follow": [7, 10], "allow": [7, 10, 14, 15], "user": [7, 8, 14, 15, 16], "easili": 7, "sever": 7, "fashion": 7, "without": [7, 8], "troubl": 7, "thread": [7, 8], "code": [7, 8], "take": 7, "care": 7, "avail": [7, 15, 16], "resourc": [7, 14], "system": [7, 15], "It": [7, 10], "": [7, 10, 11], "ideal": 7, "case": 7, "i": [7, 8, 11, 13, 14, 15, 16], "e": 7, "g": 7, "independ": [7, 8], "openmp": 7, "The": [7, 8, 10, 13, 14, 15], "can": [7, 8, 10, 11, 14, 15], "simpli": 7, "defin": [7, 10, 14], "appropri": 7, "input": [7, 10], "Then": 7, "make": [7, 11, 14], "sure": [7, 11, 14], "enough": 7, "concurr": [7, 8], "time": [7, 10, 16], "fulli": 7, "exploit": 7, "If": [7, 10, 15], "freed": 7, "due": 7, "complet": [7, 14], "fit": 7, "automat": 7, "until": 7, "easiest": 7, "latest": 7, "releas": [7, 8], "through": [7, 8], "conda": 7, "packag": 7, "manag": 7, "c": 7, "greenenergystorag": 7, "dispatch": 7, "order": [7, 16], "import": [7, 11], "python": [7, 8, 15], "script": 7, "jd": [7, 14, 15], "reli": [7, 15], "creation": 7, "minim": 7, "exampl": [7, 10, 11], "we": 7, "specif": [7, 10], "therefor": [7, 14, 15], "onli": [7, 10, 16], "one": [7, 10, 16], "let": 7, "creat": [7, 11, 15], "our": 7, "def": [7, 14], "my_funct": 7, "print": [7, 10, 14], "first_job": 7, "need": [7, 8], "assign": 7, "invok": 7, "method": 7, "easi": 7, "perform": [7, 8, 14, 15], "initi": [7, 14, 15], "constructor": 7, "more": [7, 10, 11], "advanc": 7, "assig": 7, "guid": [7, 8, 11], "screen": 7, "also": [7, 8, 10, 11, 14], "accept": [7, 10], "here": [7, 10, 11], "show": 7, "simpl": [7, 8], "while": [7, 14], "explan": [7, 13], "found": 7, "2": [7, 11, 14, 15], "ha": [7, 10, 14], "valu": [7, 15], "dictionari": [7, 14], "whose": 7, "entri": 7, "kei": [7, 8, 13, 14], "main": [7, 8], "help": [7, 8], "an": 7, "autom": 7, "worri": 7, "about": [7, 10, 11], "given": [7, 14], "By": 7, "default": [7, 10], "alloc": [7, 14], "each": 7, "o": [7, 8, 15], "sched_getaffin": 7, "0": [7, 8, 11], "gener": 7, "random": [7, 11], "process": [7, 8, 15], "To": 7, "some": [7, 8, 10, 11, 14], "rang": [7, 11], "100": [7, 11], "f": 7, "append": 7, "onc": [7, 10, 14], "collect": 7, "when": [7, 8, 10, 15, 16], "specifi": [7, 15], "requir": [7, 14, 15], "maximum": 7, "4": [7, 11], "detail": [7, 8], "18": 8, "schedul": [8, 13], "librari": 8, "tinker": 8, "applic": 8, "extern": [8, 15], "interpret": 8, "oper": 8, "where": 8, "go": 8, "get": 8, "start": 8, "quick": 8, "tour": 8, "instal": 8, "basic": 8, "dapth": 8, "concept": [8, 13], "api": 8, "refer": [8, 10], "modul": [8, 11], "includ": [8, 10, 11], "contributor": 8, "guidelin": 8, "develop": 8, "improv": 8, "whether": 10, "book": [10, 11], "content": 10, "jupyt": [10, 11], "notebook": 10, "ipynb": 10, "regular": 10, "md": 10, "ll": 10, "same": 10, "flavor": 10, "stand": 10, "markedli": 10, "text": 10, "slight": 10, "variat": 10, "commonmark": 10, "small": 10, "syntax": 10, "extens": 10, "sphinx": 10, "ecosystem": 10, "two": 10, "most": [10, 11], "power": 10, "tool": 10, "thei": 10, "kind": 10, "like": 10, "written": 10, "markup": 10, "languag": 10, "both": [10, 15], "serv": 10, "similar": 10, "purpos": 10, "line": [10, 11], "wherea": 10, "span": 10, "those": 10, "depend": 10, "being": 10, "At": 10, "simplest": 10, "insert": 10, "mydirectivenam": 10, "my": 10, "work": [10, 11, 15], "alreadi": 10, "exist": 10, "doesn": 10, "t": [10, 11], "pre": 10, "associ": 10, "For": [10, 11, 16], "note": [10, 15], "box": 10, "result": [10, 14], "built": 10, "see": [10, 11], "document": [10, 11], "veri": 10, "less": [10, 15], "complex": 10, "entir": 10, "pattern": 10, "rolenam": 10, "again": 10, "valid": 10, "doc": 10, "anoth": 10, "directli": 10, "rel": 10, "path": 10, "intro": 10, "cite": 10, "store": 10, "bibtex": 10, "holdgraf_evidence_2014": 10, "render": 10, "hdhpk14": 10, "moreov": 10, "bibliographi": 10, "must": [10, 14], "properli": 10, "bib": 10, "look": 10, "christoph": 10, "ramsai": 10, "holdgraf": 10, "wendi": 10, "de": 10, "heer": 10, "brian": 10, "n": [10, 11], "paslei": 10, "robert": 10, "knight": 10, "evid": 10, "predict": 10, "human": 10, "auditori": 10, "cortex": 10, "intern": 10, "confer": 10, "cognit": 10, "neurosci": 10, "brisban": 10, "australia": 10, "2014": 10, "frontier": 10, "d": 10, "comput": 10, "insid": 10, "cell": [10, 11], "jupytext": 10, "first": 10, "metadata": 10, "command": 10, "init": 10, "build": 10, "block": 10, "kernel": 10, "output": [10, 14, 15], "displai": 10, "rest": 10, "nb": 10, "mean": 11, "As": 11, "emb": 11, "imag": 11, "html": 11, "etc": 11, "post": 11, "add_": 11, "math": 11, "begin": 11, "align": 11, "mbox": 11, "la_": 11, "tex": 11, "end": 11, "But": 11, "escap": 11, "dollar": 11, "sign": 11, "want": 11, "keep": 11, "well": 11, "check": [11, 14], "out": 11, "sampl": 11, "matplotlib": 11, "rcparam": 11, "cycler": 11, "pyplot": 11, "plt": 11, "numpi": 11, "np": 11, "ion": 11, "modulenotfounderror": 11, "traceback": 11, "recent": 11, "last": 11, "tmp": 11, "ipykernel_39618": 11, "2191868119": 11, "py": 11, "3": 11, "No": [11, 14], "fix": 11, "state": 11, "reproduc": 11, "seed": 11, "19680801": 11, "10": [11, 14], "data": [11, 15], "logspac": 11, "randn": 11, "ii": 11, "arrai": 11, "cmap": 11, "cm": 11, "coolwarm": 11, "ax": 11, "prop_cycl": 11, "color": 11, "linspac": 11, "line2d": 11, "custom_lin": 11, "lw": 11, "5": [11, 14], "fig": 11, "subplot": 11, "figsiz": 11, "plot": 11, "legend": 11, "cold": 11, "medium": 11, "hot": 11, "lot": 11, "interact": 11, "depth": 13, "background": 13, "divid": 13, "three": 13, "chapter": 13, "definit": 13, "logger": 13, "certain": 14, "amount": [14, 15], "retriev": 14, "correspond": 14, "uniqu": 14, "request": [14, 16], "some_funct": 14, "some_job": 14, "respons": 14, "match": [14, 16], "signatur": 14, "Not": 14, "implement": [14, 16], "yet": 14, "either": 15, "multithread": 15, "paradigm": 15, "achiev": 15, "8": 15, "choic": 15, "prefer": 15, "base": [15, 16], "program": 15, "outsid": 15, "gil": 15, "navig": 15, "folder": 15, "intens": 15, "otherwis": 15, "within": 15, "copi": 15, "origin": 15, "memori": 15, "larg": 15, "load": 15, "ram": 15, "carri": 15, "impact": 15, "stack": 15, "longer": 15, "term": 15, "size": 15, "total": 15, "limit": 15, "higher": 15, "count": 15, "than": 15, "effect": 15, "warn": 15, "log": 15, "accordingli": 15, "overrid": 15, "current": 16, "crate": 16, "bin": 16, "pack": 16, "algorithm": 16, "reason": 16, "guarante": 16}, "objects": {"jobdispatcher": [[0, 0, 0, "-", "engines"], [1, 0, 0, "-", "job_balancers"], [2, 0, 0, "-", "jobs"], [3, 0, 0, "-", "processor"]], "jobdispatcher.engines": [[0, 1, 1, "", "Engine"], [0, 1, 1, "", "MultiprocessingEngine"], [0, 1, 1, "", "ThreadingEngine"]], "jobdispatcher.job_balancers": [[1, 1, 1, "", "JobBalancer"]], "jobdispatcher.job_balancers.JobBalancer": [[1, 2, 1, "", "run"]], "jobdispatcher.jobs": [[2, 1, 1, "", "Job"]], "jobdispatcher.jobs.Job": [[2, 3, 1, "", "cores"]], "jobdispatcher.processor": [[3, 1, 1, "", "JobDispatcher"]], "jobdispatcher.processor.JobDispatcher": [[3, 2, 1, "", "add"], [3, 2, 1, "", "run"]]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:method", "3": "py:property"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"], "3": ["py", "property", "Python property"]}, "titleterms": {"jobdispatch": [0, 1, 2, 3, 8, 13], "engin": [0, 15], "job_balanc": 1, "job": [2, 7, 14, 15, 16], "processor": 3, "api": 4, "refer": 4, "content": [5, 11], "jupyt": 5, "book": 5, "contributor": 6, "guid": [6, 13], "get": 7, "start": 7, "librari": 7, "purpos": 7, "instal": 7, "my": 7, "first": 7, "argument": 7, "retriev": 7, "result": 7, "run": [7, 15], "multipl": 7, "request": 7, "core": [7, 15], "doc": 8, "markdown": [10, 11], "file": 10, "what": 10, "i": 10, "myst": [10, 11], "ar": 10, "role": 10, "direct": 10, "us": [10, 15], "ad": 10, "citat": 10, "execut": 10, "code": [10, 11], "your": 10, "notebook": 11, "block": 11, "output": 11, "some": [], "releas": 12, "note": 12, "user": 13, "definit": 14, "depend": 14, "thread": 15, "multiprocess": 15, "resourc": 15, "usag": 15, "set": 15, "maximum": 15, "number": 15, "an": 15, "equal": 15, "each": 15, "schedul": 16, "log": 17}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 57}, "alltitles": {"jobdispatcher.engines": [[0, "module-jobdispatcher.engines"]], "jobdispatcher.job_balancers": [[1, "module-jobdispatcher.job_balancers"]], "jobdispatcher.jobs": [[2, "module-jobdispatcher.jobs"]], "jobdispatcher.processor": [[3, "module-jobdispatcher.processor"]], "API reference": [[4, "api-reference"]], "Content in Jupyter Book": [[5, "content-in-jupyter-book"]], "Contributors guide": [[6, "contributors-guide"]], "Getting started": [[7, "getting-started"]], "Library purpose": [[7, "library-purpose"]], "Installation": [[7, "installation"]], "My first job": [[7, "my-first-job"]], "Jobs with arguments and retrieving results": [[7, "jobs-with-arguments-and-retrieving-results"]], "Running multiple jobs": [[7, "running-multiple-jobs"]], "Requesting cores": [[7, "requesting-cores"]], "JobDispatcher Docs": [[8, "jobdispatcher-docs"]], "Markdown Files": [[10, "markdown-files"]], "What is MyST?": [[10, "what-is-myst"]], "What are roles and directives?": [[10, "what-are-roles-and-directives"]], "Using a directive": [[10, "using-a-directive"]], "Using a role": [[10, "using-a-role"]], "Adding a citation": [[10, "adding-a-citation"]], "Executing code in your markdown files": [[10, "executing-code-in-your-markdown-files"]], "Content with notebooks": [[11, "content-with-notebooks"]], "Markdown + notebooks": [[11, "markdown-notebooks"]], "MyST markdown": [[11, "myst-markdown"]], "Code blocks and outputs": [[11, "code-blocks-and-outputs"]], "JobDispatcher User Guide": [[13, "jobdispatcher-user-guide"]], "Job definition": [[14, "job-definition"]], "Job dependencies": [[14, "job-dependencies"]], "Job running": [[15, "job-running"]], "Threading engine": [[15, "threading-engine"]], "Multiprocessing engine": [[15, "multiprocessing-engine"]], "Resource usage": [[15, "resource-usage"]], "Setting maximum number of used cores": [[15, "setting-maximum-number-of-used-cores"]], "Setting an equal number of cores for each job": [[15, "setting-an-equal-number-of-cores-for-each-job"]], "Job scheduling": [[16, "job-scheduling"]], "Logging": [[17, "logging"]], "Release notes": [[12, "release-notes"]]}, "indexentries": {}})