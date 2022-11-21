const StyleDictionary = require('style-dictionary').extend({
    "source": ["./src/components/design-tokens/hook/tokens.json"],
    "platforms": {
        "css": {
            "transforms": [
                "attribute/cti",
                "name/cti/kebab",
                "time/seconds",
                "content/icon",
                "size/px",
                "color/css",
                "font/weight-lowercase"
            ],
            "files": [{
                "format": "css/variables",
                "destination": "./src/components/design-tokens/hook/index.module.pcss",
                "options": {
                    "selector": ".design-tokens"
                }
            }]
        }
    }
});

StyleDictionary.registerTransform({
    name       : 'size/px',
    type       : 'value',
    transformer: (props) => `${props.value}px`,
    matcher    : (props) => {
        const value = Number(props.value);

        return Number.isInteger(value) && value;
    }
});

StyleDictionary.registerTransform({
    name       : 'font/weight-lowercase',
    type       : 'value',
    transitive : true,
    transformer: (props) => props.value.toLowerCase(),
    matcher    : (props) => props.type === 'fontWeight'
});

StyleDictionary.buildAllPlatforms();
