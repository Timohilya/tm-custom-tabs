const Tabs = {
    groupNames: ['test1', 'test2'],
    init: function() {
        this.groupNames.forEach(groupName => {
            let buttons = document.querySelectorAll(`[data-tabButtons="${groupName}"] [data-tabButton]`),
            ISTOGGLE = document.querySelector(`[data-tabButtons="${groupName}"][data-toggle]`),
            activeTabButton = document.querySelector(`[data-tabButtons="${groupName}"] [data-tabActive]`),
            containers = document.querySelectorAll(`[data-tabContainers="${groupName}"] [data-tabContainer]`);
            if(activeTabButton !=null) {
                this.activeTab(containers, activeTabButton);
            }
            this.tabInit(containers, buttons, ISTOGGLE);
        });
    },
    tabInit: function(containers, buttons, ISTOGGLE) {
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                if(ISTOGGLE === null) {
                    this.hideAllTabs(containers, buttons);
                    this.showTab(containers, buttons, button.getAttribute('data-tabButton'));
                } else {
                    if(!button.classList.contains('active')) {
                        this.hideAllTabs(containers, buttons);
                        this.showTab(containers, buttons, button.getAttribute('data-tabButton'));
                    } else {
                        this.hideAllTabs(containers, buttons);
                    }
                }
            });
        });
    },
    activeTab: function(containers, activeTabButton) {
        activeTabButton.classList.add('active');
        let tabName = activeTabButton.getAttribute('data-tabButton');
        containers.forEach(container => {
            if(container.getAttribute('data-tabContainer') === tabName) {
                container.classList.add('active');
            }
        });
    },
    showTab: function(containers, buttons, tabName) {
        buttons.forEach(button => {
            if(button.getAttribute('data-tabButton') === tabName) {
                button.classList.add('active');
            }
        });
        containers.forEach(container => {
            if(container.getAttribute('data-tabContainer') === tabName) {
                container.classList.add('active');
            }
        });
    },
    hideAllTabs: function(containers, buttons) {
        buttons.forEach(button => {
            button.classList.remove('active');
        });
        containers.forEach(container => {
            container.classList.remove('active');
        });
    },
};

Tabs.init();