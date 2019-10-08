// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { JupyterLab, JupyterLabPlugin } from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for the Jupyter Simple Theme.
 */
const plugin: JupyterLabPlugin<void> = {
  id: 'jupyter-material:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterLab, manager: IThemeManager) {
  const style = 'jupyter-material/index.css';

    manager.register({
      name: 'Jupyter Material',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
