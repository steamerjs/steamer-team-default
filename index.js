let teamConfig = {
    config: {
        NPM: 'npm',
        TEAM: 'default'
    },
    kits: [
        {
            'steamer-react': {
                'git': 'https://github.com/steamerjs/steamer-react.git'
            }
        },
        {
            'steamer-vue': {
                'git': 'https://github.com/steamerjs/steamer-vue.git'
            }
        },
        {
            'steamer-simple': {
                'git': 'https://github.com/steamerjs/steamer-simple.git'
            }
        },
        {
            'steamer-react-component': {
                'git': 'https://github.com/steamerjs/steamer-react-component.git'
            }
        },
        {
            'steamer-vue-component': {
                'git': 'https://github.com/steamerjs/steamer-vue-component.git'
            }
        },
        {
            'steamer-simple-component': {
                'git': 'https://github.com/steamerjs/steamer-simple-component.git'
            }
        },
        {
            'steamer-logic-component': {
                'git': 'https://github.com/steamerjs/steamer-logic-component.git'
            }
        },
    ],
    plugins: [
        'steamer-plugin-mock'
    ],
    beforeInstall: function() {

    },
    afterInstall: function() {
        
    }
};

module.exports = teamConfig;