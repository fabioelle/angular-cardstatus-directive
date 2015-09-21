# Angular Cardstatus Directive

[Homepage](https://github.com/fabioelle/angular-cardstatus-directive)


## Usage
1. Include 'bower_components/angular-cardstatus-directive/card-status.js'.
2. Include 'bower_components/angular-cardstatus-directive/card-status.css'.
3. Add 'cardstatus-directive' as a dependency to your app.
4. Make '<cardstatus ng-model="{{your_model}}"></cardstatus>'.

## Data Model:
[
...
	{
	"type":"vexilar",
	"trend":{
		"average":0.06246506725437939,
		"total":27048,
		"week":449,
		"l_week":0.0249308489728719,
		"l_w_t":"-"
		}
	},
...
]

## Bower
Installable via 'bower':

```bash
bower install angular-cardstatus-directive
```

## Example
See the [homepage](https://github.com/fabioelle/angular-cardstatus-directive) for an example.

```html
<div ng-app="myApp">
	<cardstatus ng-model="card"></cardstatus>
</div>
</pre>
```

## License
MIT