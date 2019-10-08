"use strict";
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
Object.defineProperty(exports, "__esModule", { value: true });
const apputils_1 = require("@jupyterlab/apputils");
/**
 * A plugin for the Jupyter Simple Theme.
 */
const plugin = {
    id: '@nfultz/jupyterlab-theme-simple-extension:plugin',
    requires: [apputils_1.IThemeManager],
    activate: function (app, manager) {
        const style = '@nfultz/jupyterlab-theme-simple-extension/index.css';
        manager.register({
            name: 'JupyterLab Simple',
            isLight: true,
            load: () => manager.loadCSS(style),
            unload: () => Promise.resolve(undefined)
        });
    },
    autoStart: true
};
exports.default = plugin;
