/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import {
  useSiteMetadata,
  useCatalystConfig,
} from "gatsby-theme-catalyst-core"

const SiteFooter = () => {
  const { title } = useSiteMetadata()
  const { footerContentLocation } = useCatalystConfig()
  const { theme } = useThemeUI()
  const isLeft = footerContentLocation === "left"
  const isRight = footerContentLocation === "right"
  const isCenter = footerContentLocation === "center"

  return (
    <footer
      sx={{
        color: "footer.text",
        backgroundColor: "footer.background",
        textAlign:
          (isLeft && "left") || (isRight && "right") || (isCenter && "center"),
        px: 3,
        py: 3,
        gridArea: "footer",
        a: {
          color: "footer.links",
        },
        variant: "variants.footer",
      }}
    >
      <div
        sx={{
          display: "grid",
          alignContent: "center",
          justifyContent:
            (isLeft && "start") || (isRight && "end") || (isCenter && "center"),
          width: "100%",
          maxWidth: "maxPageWidth",
          mx: "auto",
          my: 0,
        }}
      >
        <p sx={{ m: 0 }}>
          {title}
        </p>
        <p sx={{ m: 0, fontSize: theme.sizes.textFooter }}>
          <a href="#">{title} - Privacy Policy</a>
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter
