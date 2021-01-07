import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        <script
          data-cfasync="false"
          dangerouslySetInnerHTML={{
            __html: `var swarmoptions = {
              swarmcdnkey: "0ed345b4-db94-4ac3-a0d2-283dc2537971"
            };;`
          }}
        />
        <script data-cfasync="false" src="https://assets.swarmcdn.com/cross/swarmdetect.js"></script>


        <script src="https://cc.cdn.civiccomputing.com/9/cookieControl-9.x.min.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var config = {
                apiKey: '532883f051d142f52e83791ff8b8265ab4e4a095',
                product: 'COMMUNITY',
                optionalCookies: [
                    {
                        name: 'analytics',
                        label: 'Analytics',
                        description: \`We'd like to set Cloudflare Analytics cookies to help us to improve our website by collecting and reporting information on how you use it. The cookies collect information in a way that does not directly identify anyone. For more information on how these cookies work, please see our 'Cookies page'.\`,
                        cookies: [],
                        onAccept : function(){},
                        onRevoke: function(){}
                    }
                ],

                position: 'LEFT',
                theme: 'DARK'
            };
            
            CookieControl.load( config );`,
          }}
        />

        {<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "435008575d0c46a0809f1537a233ba5c"}'></script>}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
