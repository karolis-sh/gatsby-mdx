import './bootstrap';
import React from 'react';
import CMS, { init } from 'netlify-cms';
import 'netlify-cms/dist/cms.css';
import Trend from 'react-trend';
import remarkEmojiPlugin from 'remark-emoji';

import { MdxControl, setupPreview } from '../src';

const config = {
  backend: {
    name: 'test-repo',
    login: false,
  },
  media_folder: 'assets',
  collections: [
    {
      name: 'post',
      label: 'Posts',
      label_singular: 'Post',
      folder: '_posts',
      extension: 'mdx',
      format: 'frontmatter',
      fields: [{ name: 'title', label: 'Title' }, { name: 'body', label: 'Body', widget: 'mdx' }],
    },
  ],
};

CMS.registerWidget(
  'mdx',
  MdxControl,
  setupPreview({
    components: {
      h1: ({ children, ...props }) => (
        <h1 style={{ color: 'tomato' }} {...props}>
          {children}
        </h1>
      ),
    },
    scope: {
      Trend,
      Layout: props => (
        <div
          style={{ padding: '10px', border: '1px solid green', borderRadius: '5px' }}
          {...props}
        />
      ),
    },
    mdPlugins: [remarkEmojiPlugin],
  })
);

init({ config });
