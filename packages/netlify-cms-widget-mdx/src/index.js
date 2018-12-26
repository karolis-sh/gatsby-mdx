import React from 'react';
import { MarkdownControl as MdxControl } from 'netlify-cms-widget-markdown';
import MdxPreview from './MdxPreview';

export const setupPreview = ({ scope, components }) => props => (
  <MdxPreview components={components} scope={scope} {...props} />
);

export { MdxControl, MdxPreview };
