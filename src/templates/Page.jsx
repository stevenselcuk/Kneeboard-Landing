import { MDXProvider } from '@mdx-js/react'
import SEO from '../components/atoms/SEO'
import * as styles from './Page.module.css'

const components = {
  pre: (props) => <div {...props} />,
  code: (props) => <pre style={{ color: 'tomato' }} {...props} />
}

const PageTemplate = (props) => {
  return (
    <>
      <SEO
        title={props.pageContext.frontmatter.title}
        description={props.pageContext.frontmatter.description}
      />
      <MDXProvider components={components}>
        <div {...props} className={styles.mdx}>
          {props.children}
        </div>
      </MDXProvider>
    </>
  )
}

export default PageTemplate
