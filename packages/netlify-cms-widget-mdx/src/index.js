import React from 'react';
import MarkdownWidget from 'netlify-cms-widget-markdown';
import MdxPreview from './MdxPreview';

export const setupPreview = (mdxProps) => (props) => <MdxPreview mdx={mdxProps} {...props} />;

const MdxControl = MarkdownWidget.controlComponent;

export { MdxControl, MdxPreview };
