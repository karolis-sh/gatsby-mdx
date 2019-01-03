window.CMS_MANUAL_INIT = true;

window.repoFiles = {
  _posts: {
    '1-simple-markdown.mdx': {
      content: `---
title: 1. Simple markdown
---
# I Am a Title in Markdown

Hello, world

* One Thing
* Another Thing
* A Third Thing
`,
    },
    '2-markdown-with-layout-syntax.mdx': {
      content: `---
title: 2. Markdown with mdx layout syntax
---
export default ({children}) => <div style={{ background: 'rgba(100, 100, 100, .1)' }}>children</div>

# I Am a Title in Markdown

Hello, world

* One Thing
* Another Thing
* A Third Thing
`,
    },
    '3-markdown-with-react-component.mdx': {
      content: `---
title: 3. Markdown with react components
---
import Trend from 'react-trend';
import Layout from '../components/wherever';

export default Layout

# I Am a Title in Markdown

Hello, world

<Trend
  data={[0, 10, 5, 22, 3.6, 11]}
  gradient={['#0FF', '#F0F', '#FF0']}
/>

Lore ipsum
`,
    },
    '4-markdown-handled-with-md-plugins.mdx': {
      content: `---
title: 4. Markdown handled with md plugins
---
# For example mdPlugins

Using [emoji plugin](https://github.com/rhysd/remark-emoji)

**"\`:+1:\`"** gets converted to :+1:

`,
    },
  },
};
