!function(e){function t(t){for(var i,r,s=t[0],l=t[1],d=t[2],p=0,g=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&g.push(o[r][0]),o[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(c&&c(t);g.length;)g.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},o={7:0},a=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/verso/static/";var s=window.webpackJsonpVerso=window.webpackJsonpVerso||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=l;a.push([2603,0,1]),n()}({1375:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.envConfigFromWorkflow=t.Env=void 0;var i=n(1376);Object.defineProperty(t,"Env",{enumerable:!0,get:function(){return i.Env}}),Object.defineProperty(t,"envConfigFromWorkflow",{enumerable:!0,get:function(){return i.envConfigFromWorkflow}})},1376:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.envConfigFromWorkflow=t.Env=void 0,function(e){e.production="production",e.staging="staging"}(t.Env||(t.Env={}));t.envConfigFromWorkflow=(e,t)=>t[e.env]},1377:function(e,t,n){const{default:i}=n(3),o=n(39),{BREAKPOINTS:a,GRID_GAP:r}=n(6),{applyGridSpacing:s,cssVariablesGrid:l}=n(17),{calculateSpacing:d,minMaxScreen:c,getColorToken:p,minScreen:g}=n(4),{SummaryListWrapper:u}=n(160),m=i.div.withConfig({displayName:"SummaryRiverWrapper"})`
  ${l()}

  ${({isFullBleedMobile:e})=>e&&`\n        ${u} {\n            ${c(0,a.md)} {\n              padding: 0;\n            }\n        }\n    `};
  ${({gridColSpanValue:e,showRecircMostPopularInAsideWithRail:t})=>e>=1&&t?`\n            @media (min-width: ${a.lg}) {\n                .summary-list .grid-layout__content {\n                  grid-column: span ${e};\n                }\n              }\n            `:""}

  ${({topSpacingInRem:e})=>e?`\n        ${g(a.md)} {\n          margin-top: ${d(e)};\n        }\n      `:""}
`,h=i(o).withConfig({displayName:"SummaryRiverAd"})`
  margin-bottom: ${d(4)};
`,b=i.div.withConfig({displayName:"SummaryRiverTitleWrapper"})`
  ${s("padding")}
  ${({hasScrollOffset:e})=>e?`scroll-margin-top: ${d(8)};`:""}

  margin-bottom: ${d(4)};

  ${({hasExtraTitlePadding:e})=>e?`\n      @media (min-width: ${a.xxl}) {\n        padding-left: calc(2.5 * var(--grid-margin));\n        padding-right: calc(2.5 * var(--grid-margin));\n      }\n      `:""}

  ${({hasDividerAbove:e})=>e?"":`margin-top: ${d(2)};`}
`,y=i.section.withConfig({displayName:"SummaryRiverSection"})``,f=i.div.withConfig({displayName:"SummaryRiverList"})`
  ${({hasRule:e,theme:t})=>e?`\n        &::before {\n          border-top: 1px solid ${p(t,"colors.discovery.body.white.divider")};\n          content: '';\n          grid-column: 1/-1;\n          margin-bottom: ${d(5-r.md)};\n        }\n      `:""}
`;e.exports={SummaryRiverList:f,SummaryRiverWrapper:m,SummaryRiverAd:h,SummaryRiverSection:y,SummaryRiverTitleWrapper:b}},1380:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(1397);e.exports=i(o,"BlockquoteEmbed")},1381:function(e,t,n){e.exports=n(1390)},1390:function(e,t,n){const i=n(8),o=n(1),a=n(0),{default:r}=n(165),{trackComponent:s}=n(5),{processLinks:l,processCeros:d,processTiktok:c,processSidebarHeadings:p}=n(420),g=n(1380),u=n(292),{BodyWrapper:m}=n(177),h=new r({a:l,blockquote:({props:e})=>({type:g,props:e}),ceros:d,h2:p,tiktok:c,"inline-embed":u}),b=({body:e,className:t,children:n,shouldDisableMaxWidth:o,shouldEnableDataJourneyHook:r=!0})=>{a.useEffect(()=>{s("Body")},[]);const l={className:i("body",t),shouldDisableMaxWidth:o};return r&&(l["data-journey-hook"]="client-content"),a.createElement(m,Object.assign({},l,{"data-testid":"BodyWrapper"}),n||h.convert(e))};b.propTypes={body:o.array,children:o.node,className:o.string,shouldDisableMaxWidth:o.bool,shouldEnableDataJourneyHook:o.bool},b.defaultProps={body:["div"],shouldDisableMaxWidth:!1},e.exports=b},1397:function(e,t,n){const i=n(1),o=n(0),a=n(8),{BlockquoteEmbedWrapper:r,BlockquoteEmbedContent:s,BlockquoteEmbedFooter:l,BlockquoteEmbedCite:d}=n(426),{trackComponent:c}=n(5),p=({attributes:e,children:t,citeUrl:n,className:i,dangerousAttribution:p,hasParagraphMargin:g,hasSmallMargins:u,hasTopBorder:m})=>(o.useEffect(()=>{c("BlockquoteEmbed")},[]),o.createElement(r,Object.assign({},e,{cite:n,hasTopBorder:m,hasSmallMargins:u,className:a(i,"blockquote-embed")}),o.createElement(s,{hasParagraphMargin:g,className:"blockquote-embed__content"},t),p&&o.createElement(l,null,o.createElement(d,{dangerouslySetInnerHTML:{__html:p}}))));p.propTypes={attributes:i.object,children:i.oneOfType([i.arrayOf(i.node),i.node]).isRequired,citeUrl:i.string,className:i.string,dangerousAttribution:i.string,hasParagraphMargin:i.bool,hasSmallMargins:i.bool,hasTopBorder:i.bool},p.defaultProps={hasSmallMargins:!1,hasTopBorder:!0},p.displayName="BlockquoteEmbed",e.exports=p},1398:function(e,t,n){const i=n(1),o=n(0),{InfoSliceValue:a,InfoSliceKey:r,InfoSliceItem:s,InfoSliceListItem:l,InfoSliceList:d,InfoSliceWrapper:c}=n(1399),{trackComponent:p}=n(5),g=({className:e,items:t,isMusicReview:n})=>(o.useEffect(()=>{p("InfoSlice")},[]),t&&0!==t.length?o.createElement(c,{className:e},o.createElement(d,{isMusicReview:n},t.map(e=>{const{key:t,value:n}=e;return t&&n?o.createElement(l,{key:t.toString().toLowerCase()},o.createElement(s,null,o.createElement(r,null,t),o.createElement(a,null,n))):null}))):null);g.propTypes={className:i.string,isMusicReview:i.bool,items:i.arrayOf(i.shape({key:i.string,value:i.string}))},g.defaultProps={isMusicReview:!1},e.exports=g},1399:function(e,t,n){const i=n(3).default,{calculateSpacing:o,getColorStyles:a}=n(4),{BaseText:r}=n(10),{BREAKPOINTS:s}=n(6),{maxThresholds:l}=n(16),d=i(r).withConfig({displayName:"InfoSliceValue"})`
  display: table-cell;
  vertical-align: top;
`;d.defaultProps={colorToken:"colors.consumption.body.standard.body",typeIdentity:"typography.definitions.globalEditorial.numerical-small"};const c=i(r).withConfig({displayName:"InfoSliceKey"})`
  display: table-cell;
  padding-right: ${o(1)};
  vertical-align: top;
`;c.defaultProps={colorToken:"colors.consumption.body.standard.subhed",typeIdentity:"typography.definitions.globalEditorial.context-title"};const p=i.div.withConfig({displayName:"InfoSliceItem"})`
  display: table;
  align-items: center;
  padding: ${o(.5)} 0;
`,g=i.li.withConfig({displayName:"InfoSliceListItem"})`
  @media (max-width: ${l.md}px) {
    margin: 0 auto;
  }
  @media (min-width: ${s.md}) {
    margin-right: ${o(3)};

    :last-child {
      margin-right: ${o(0)};
    }
  }
`,u=i.ul.withConfig({displayName:"InfoSliceList"})`
  display: flex;
  flex-direction: column;
  margin: 0;
  border-width: 2px 0 0;
  border-style: solid;
  ${({theme:e})=>a(e,"border-color","colors.consumption.body.standard.divider")};
  padding: ${o(1.5)} 0;
  list-style: none;

  @media (min-width: ${s.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    ${({isMusicReview:e})=>e&&"\n    justify-content: center;\n    border-width: 0 0 0;"}
  }
  ${({isMusicReview:e})=>e&&"\n  justify-content: center;\n  border-width: 0 0 0;"}
`,m=i.div.withConfig({displayName:"InfoSliceWrapper"})``;e.exports={InfoSliceValue:d,InfoSliceKey:c,InfoSliceItem:p,InfoSliceListItem:g,InfoSliceList:u,InfoSliceWrapper:m}},1404:function(e,t,n){e.exports=n(1415)},1405:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(1426);e.exports=i(o,"ReviewRatingData")},1406:function(e,t,n){e.exports=n(1398)},141:function(e,t,n){const{default:i,css:o}=n(3),{calculateSpacing:a,getColorStyles:r,getTypographyStyles:s}=n(4),{BaseText:l}=n(10),{BREAKPOINTS:d}=n(6),c=n(11),p=i.header.withConfig({displayName:"UtilityLedeHeader"})`
  ${({contentAlign:e})=>e?(e=>`\n  text-align: ${e};\n`)(e):""}
  ${({theme:e,hasBackground:t})=>t?(e=>`\n  ${r(e,"background-color","colors.discovery.body.white.background")};\n`)(e):""}
  ${({hasImage:e})=>e?`\n      display: grid;\n      grid-template-columns: repeat(8, 1fr);\n      grid-column-gap: 1.5rem;\n      align-items: center;\n      padding: ${a(12)} 0 ${a(100)} 0;\n      @media  (min-width: 0) and (max-width: ${d.md}){\n          grid-gap: ${a(2)};\n          grid-template-columns: repeat(4, 1fr);\n          padding: ${a(5)} 0 ${a(5)} 0;\n          justify-items: center;\n      }\n      `:""}
  ${({alternativeStyle:e})=>e?`\n    grid-gap: ${a(2)} 0;\n    @media (min-width: 0) and (max-width: ${d.md}){\n      grid-gap: ${a(4)} 0;\n    }\n    `:""}
`,g=i.div.withConfig({displayName:"UtilityLedeWrapper"})`
  grid-auto-flow: row;
  grid-column: 4 / span 5;

  @media (min-width: 0) and (max-width: ${d.md}) {
    grid-gap: ${a(2)} 0;
    grid-column: 1 / span 4;
  }

  ${e=>!0===e.alternativeStyle?`\n        grid-gap: ${a(2)} 0;\n        @media (min-width: 0) and (max-width: ${d.md}){\n            grid-gap: ${a(4)} 0;\n        }\n        `:""}
`,u=i(l).withConfig({displayName:"UtilityLedeHedText"})`
  ${e=>!0===e.alternativeStyle?`\n        ${({theme:e})=>r(e,"color","colors.discovery.lead.primary.hed")};\n        ${({theme:e})=>s(e,"typography.definitions.discovery.page-hed-section")};\n        `:""}
  ${e=>!0===e.hasImage?"\n        margin: 0;\n        ":`margin: 0 0 ${a(2,"px")};`}

  ${e=>!0===e.hasInverted&&o`
      ${({theme:e})=>r(e,"color","colors.discovery.body.white.context-texture")};
      ${({theme:e})=>s(e,"typography.definitions.discovery.hed-core-primary")};
      line-height: 25px;
      font-size: 20px;
    `}
`;u.defaultProps={as:"h1",colorToken:"colors.discovery.body.white.heading",typeIdentity:"typography.definitions.discovery.hed-break-out"};const m=i(l).withConfig({displayName:"UtilityLedeDekText"})`
  a {
    ${({theme:e})=>r(e,"color","colors.discovery.body.white.accent")};
  }

  p {
    margin: 0; /* overwrite native browser margins for paragraph tags */
  }
  ${e=>!0===e.alternativeStyle?`\n        ${({theme:e})=>r(e,"color","colors.discovery.lead.primary.description")};\n        ${({theme:e})=>s(e,"typography.definitions.discovery.description.feature")};\n        a {\n          ${({theme:e})=>r(e,"color","colors.discovery.lead.primary.description")};\n        }\n        `:""}

  ${e=>!0===e.hasImage?"\n        margin: 0;\n        ":`margin: ${a(2,"px")} 0 0;`}

  @media (min-width: 0) and (max-width: ${d.md}) {
    grid-row: 2;
  }
`;m.defaultProps={as:"h2",colorToken:"colors.discovery.body.white.description",typeIdentity:"typography.definitions.consumptionEditorial.body-core"};const h=i(c).withConfig({displayName:"UtilityLedeImage"})`
  grid-column: 1 / span 3;
  @media (min-width: 0) and (max-width: ${d.md}) {
    grid-column: 2 / span 2;
    grid-row: 1;
  }
  ${e=>!0===e.hasImage?`\n      @media (min-width: 0) and (max-width: ${d.md}){\n        padding-bottom: 0;\n      }\n      `:""}
`;e.exports={UtilityLedeHeader:p,UtilityLedeWrapper:g,UtilityLedeHedText:u,UtilityLedeDekText:m,UtilityLedeImage:h}},1413:function(e,t,n){const{asVariation:i}=n(13),o=n(1414),a=n(1430),r=n(1433);o.TextAboveCenterGridWidth=i(o,"TextAboveCenterGridWidth",{contentAlign:"center",contentPosition:"above"}),o.TextAboveCenterGridWidthTopCardSmall=i(o,"TextAboveCenterGridWidthTopCardSmall",{contentAlign:"center",contentPosition:"above",contentStyle:"card",copyWidth:"fullbleed",leadRailAnchor:!0,mediaWidth:"small"}),o.TextAboveCenterFullBleed=i(o,"TextAboveCenterFullBleed",{contentAlign:"center",contentPosition:"above",mediaWidth:"fullbleed"}),o.TextAboveCenterFullBleedNoContributor=i(o,"TextAboveCenterFullBleedNoContributor",{contentAlign:"center",contentPosition:"above",mediaWidth:"fullbleed"},{hasDesktopTitleBlockDivider:!1,captionStyle:"span-content-well",captionWidth:"fullbleed",showContributorImage:!1}),o.TextAboveCenterFullBleedTop=i(o,"TextAboveCenterFullBleedTop",{contentAlign:"center",contentPosition:"above",copyWidth:"fullbleed"}),o.TextAboveCenterFullBleedGridWidthCard=i(o,"TextAboveCenterFullBleedGridWidthCard",{contentAlign:"center",contentPosition:"above",contentStyle:"card",copyWidth:"fullbleed"}),o.TextAboveCenterFullBleedCard=i(o,"TextAboveCenterFullBleedCard",{contentAlign:"center",contentPosition:"above",contentStyle:"card",mediaWidth:"fullbleed",copyWidth:"fullbleed"}),o.TextAboveLeftSmall=i(o,"TextAboveLeftSmall",{contentAlign:"left",contentPosition:"above",leadRailAnchor:!0,mediaWidth:"small"}),o.TextAboveLeftSmallWithRule=i(o,"TextAboveLeftSmallWithRule",{contentAlign:"left",contentPosition:"above",hasLedeLightbox:!0,leadRailAnchor:!0,mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0},{stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),o.TextAboveCenterSmallWithRule=i(o,"TextAboveCenterSmallWithRule",{contentAlign:"center",contentPosition:"above",leadRailAnchor:!0,ledeAlign:"center",mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0},{stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),o.InlineImage=i(o,"InlineImage",{contentAlign:"center",contentPosition:"above",leadRailAnchor:!0,ledeAlign:"center",mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0},{dividerType:"bottom",hideLede:!0,showContributorImage:!1,stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),o.TextAboveLeftFullBleed=i(o,"TextAboveLeftFullBleed",{contentAlign:"left",contentPosition:"above",copyWidth:"grid",hasLedeLightbox:!0,mediaWidth:"fullbleed"}),o.TextAboveLeftGridWidth=i(o,"TextAboveLeftGridWidth",{contentAlign:"left",contentPosition:"above",mediaWidth:"grid"}),o.TextAboveLeftGridWidthCard=i(o,"TextAboveLeftGridWidthCard",{contentAlign:"left",contentPosition:"above",contentStyle:"card",mediaWidth:"grid"}),o.TextAboveLeftNoImg=i(o,"TextAboveLeftNoImg",{contentAlign:"left",contentPosition:"above"},{className:"content-header--no-lede",lede:null}),o.TextBelowCenterGridWidth=i(o,"TextBelowCenterGridWidth",{contentAlign:"center",contentPosition:"below"}),o.TextBelowCenterFullBleed=i(o,"TextBelowCenterFullBleed",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed"}),o.TextBelowCenterFullBleedNoContributor=i(o,"TextBelowCenterFullBleedNoContributor",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed"},{hasDesktopTitleBlockDivider:!1,captionStyle:"span-content-well",captionWidth:"fullbleed",showContributorImage:!1}),o.TextBelowLeftGridWidth=i(o,"TextBelowLeftGridWidth",{contentAlign:"left",contentPosition:"below"}),o.TextBelowLeftGridWidthCard=i(o,"TextBelowLeftGridWidthCard",{contentAlign:"left",contentPosition:"below",contentStyle:"card"}),o.TextBelowLeftFullBleed=i(o,"TextBelowLeftFullBleed",{contentAlign:"left",contentPosition:"below",mediaWidth:"fullbleed"}),o.TextBelowFullBleedDenseCard=i(o,"TextBelowFullBleedDenseCard",{contentAlign:"left",contentPosition:"below",contentStyle:"dense-card",mediaWidth:"fullbleed"}),o.TextOverlay=i(a,"TextOverlayContentHeader",{}),o.TextOverlayWithLogo=i(a,"TextOverlayContentHeaderWithLogo",{isFeatured:!0}),o.TextOverlayCenterFullBleedGradient=i(a,"TextOverlayCenterFullBleedGradient",{contentAlign:"center",background:"gradient"}),o.SplitScreenImgLeft=i(o,"SplitScreenImgLeft",{contentAlign:"left",contentPosition:"end"}),o.SplitScreenImgRight=i(o,"SplitScreenImgRight",{contentAlign:"left",contentPosition:"start"}),o.SplitScreenImgRightContentCenter=i(o,"SplitScreenImgRightContentCenter",{contentAlign:"center",contentPosition:"start",contentStyle:"card",mediaWidth:"grid"}),o.AssetMiddleCenterBig=i(o,"AssetMiddleCenterBig",{assetPosition:"middle",contentAlign:"center",contentPosition:"above",mediaWidth:"small"}),o.AssetMiddleCenterFullBleed=i(o,"AssetMiddleCenterFullBleed",{assetPosition:"middle",contentAlign:"center",contentPosition:"above",mediaWidth:"grid"}),o.SubjectFocus=i(o,"SubjectFocus",{contentAlign:"left",contentPosition:"above",hasExtraSpaceBetweenSeparator:!0,leadRailAnchor:!0,mediaWidth:"small",publishDatePosition:"top",reducedSpacings:!0},{showContributorImage:!1}),o.SplitScreenImageRightFullBleed=i(r,"SplitScreenImageRightFullBleed",{},{isTextRight:!1,showContributorImage:!1}),o.SplitScreenImageRightInset=i(r,"SplitScreenImageRightInset",{},{isInset:!0,isTextRight:!1,showContributorImage:!1}),o.SplitScreenImageLeftFullBleed=i(r,"SplitScreenImageLeftFullBleed",{},{isTextRight:!0,showContributorImage:!1}),o.SplitScreenImageLeftInset=i(r,"SplitScreenImageLeftInset",{},{isInset:!0,isTextRight:!0,showContributorImage:!1}),o.BusinessContentHeader=i(o,"BusinessContentHeader",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed",showContentDivider:!0,hideRubric:!0}),e.exports=o},1414:function(e,t,n){const i=n(8),o=n(1),a=n(0),r=n(140),{withLightbox:s}=n(1404),l=n(74),{trackComponent:d}=n(5),c=n(20),p=n(43),g=n(36),u=n(176),m=n(92),h=n(109),b=n(11),y=n(1418),f=n(223),C=n(1425),{useNativeShare:v}=n(94),{getThemedBylineVariation:S}=n(248),{ContentHeaderSocialIcons:w}=n(440),{ContentHeaderWrapper:k,ContentHeaderOffersData:x,ContentHeaderLeadOverride:$,ContentHeaderAccreditationBottom:T,ContentHeaderContainer:E,ContentHeaderPublishDate:N,ContentHeaderLeadAssetWrapper:L,ContentHeaderBylines:I,ContentHeaderPersistentAside:B}=n(245),{ContentHeaderDek:A}=n(243),{getOverrideBehaviour:P}=n(427),D=({additionalPhotos:e,authorsTitleBlockPosition:t,awards:n,business:o,bylineVariation:r,captionStyle:l,captionWidth:c,className:p,contentHeaderCategories:g,contentSponsorNames:u,contributorImage:m,contributors:h,ctaText:b,dangerousDek:D,dangerousHed:R,dividerType:M,hasDesktopTitleBlockDivider:O,hasLedeLightboxButton:H,hasLightbox:_,hasSlideshow:W,hasStaticPositionedAward:G,hasStickyBoxIndexPosition:j,hasStickySocialIcons:F,hideByLine:V,hideContributors:U,hideDangerousDek:z,hideRubric:q,hideSocialIconsOnMobile:K,hideTopDisclaimerOnMobile:Y,hideTopRating:Z,hidePublishDate:X,interactiveOverride:J,isBusinessContentHeader:Q,isLiveStoryType:ee,isStoryLive:te,issueDate:ne,issueLink:ie,lede:oe,ledeSocialIcons:ae,offers:re,persistentAsideAlign:se,price:le,publishDate:de,rating:ce,reviewRating:pe,rubric:ge,rubricVariation:ue,itemsCount:me,hasContributorImageBackground:he,metadataVideo:be,showContentDivider:ye,showContributorImage:fe,showSponsorBlock:Ce,showHeaderButton:ve,hideIssueDate:Se,hideIssueDatePipeSeparator:we,hideLede:ke,hideLedeCaption:xe,hasDisabledCloseOnClickForLightbox:$e,hasNarrowHeader:Te,shouldDisplayPremiereDate:Ee,shouldShortenHeadline:Ne,showFullWidthLeadImage:Le,showIssueCopyByDate:Ie,showTextOverlayDek:Be,slideShowVariation:Ae,socialIconsToHide:Pe,socialMedia:De,socialTitle:Re,socialDescription:Me,stickySocialAnchorBottom:Oe,stickySocialAnchorTop:He,theme:_e,sponsoredContentHeaderProps:We,sponsorByline:Ge,variations:{assetPosition:je,copyWidth:Fe,contentAlign:Ve,contentPosition:Ue,contentStyle:ze,hasExtraSpaceBetweenSeparator:qe=!1,hasLedeLightbox:Ke,hasNoRowPadding:Ye,hasInlinePublishDate:Ze,hasXsNavSpacing:Xe,ledeAlign:Je,leadRailAnchor:Qe,mediaWidth:et,publishDatePosition:tt="bottom",reducedSpacings:nt=!1},hasNativeShareButton:it,shouldEnableNativeShareOnDesktop:ot,showBreadCrumb:at,venueAwards:rt,hasInvertedCaption:st,hasInvertedLedeBackground:lt})=>{a.useEffect(()=>{d("ContentHeader",{assetPosition:je,copyWidth:Fe,contentAlign:Ve,contentPosition:Ue,contentStyle:ze,hasExtraSpaceBetweenSeparator:qe,hasLedeLightbox:Ke,hasNarrowHeader:Te,hasNoRowPadding:Ye,hasInlinePublishDate:Ze,hasXsNavSpacing:Xe,ledeAlign:Je,leadRailAnchor:Qe,mediaWidth:et,publishDatePosition:tt,reducedSpacings:nt})},[]);const dt="middle"===je,ct=(e=>e&&1===Object.keys(e).length&&e.author&&1===e.author.items.length)(h)&&Ze,pt="storyimage"===P(J),gt=S({bylineVariation:r,theme:_e}),ut=a.createElement(y,{authorsPosition:t,business:o,bylineVariation:gt,contentHeaderCategories:g,contentSponsorNames:u,contributors:h,dangerousHed:R,dividerType:M,hasContentDivider:ye,hasDesktopTitleBlockDivider:O,hasNoRowPadding:Ye,hasExtraSpaceBetweenSeparator:qe,hideIssueDate:Se,hideIssueDatePipeSeparator:we,hideRubric:q,hidePublishDate:X,isBusinessContentHeader:Q,isLiveStoryType:ee,isStoryLive:te,issueDate:ne,issueLink:ie,itemsCount:me,metadataVideo:be,price:le,publishDate:de,publishDatePosition:tt,rubric:ge,rubricVariation:ue,showIssueCopyByDate:Ie,theme:_e});let mt=f;_&&Ke&&(mt=e?s(f,e,W,Ae,$e):s(f,[oe]));const{showNativeShareButton:ht,pageUrl:bt}=v(it,ot),yt="hidden"!==t,ft=h&&Object.keys(h).length>1,Ct=h&&!U&&a.createElement(I,{contributors:h,bylineVariation:gt,isCompact:!1,inlinePublishDate:ct}),vt=!X&&a.createElement(N,{inlinePublishDate:ct,"data-testid":"ContentHeaderPublishDate",mediaWidth:et,contentAlign:Ve},de);return a.createElement(k,{className:i("content-header",{[p]:p}),isLiveStoryType:ee,publishDatePosition:tt,hasXsNavSpacing:Xe,contentAlign:Ve,assetPosition:je,shouldShowAuthorsInTitleBlock:yt,captionStyle:l,copyWidth:Fe,mediaWidth:et,contentStyle:ze,contentPosition:Ue,isBusinessContentHeader:Q,shouldShortenHeadline:Ne,reducedSpacings:nt,hasInvertedCaption:st,containerTheme:_e,shouldBylineContentStacked:ft,hasExtraSpaceBetweenSeparator:qe,hasLede:!!oe,hasNarrowHeader:Te,showBreadCrumb:at,showTextOverlayDek:Be},a.createElement(E,{containerTheme:_e,mediaWidth:et,showFullWidthLeadImage:Le,contentStyle:ze,contentPosition:Ue,"data-testid":"ContentHeaderContainer"},R&&ut,a.createElement(C,{bylinesBlock:Ct,contributorImage:m,dangerousDek:D,hideDangerousDek:z,dividerType:M,hasContributorImageBackground:he,hasDesktopTitleBlockDivider:O,hasLede:!!oe,hideTopRating:Z,hasStickySocialIcons:F,hideByLine:V,hideSocialIconsOnMobile:K,isBusinessContentHeader:Q,isMiddleImage:dt,isSponsoredContent:u.length>0,isLiveStoryType:ee,isStoryLive:te,metadataVideo:be,publishDateBlock:vt,publishDatePosition:tt,rating:ce,reviewRating:pe,shouldDisplayPremiereDate:Ee,shouldShowAuthorsInTitleBlock:yt,showContributorImage:fe,showSponsorBlock:Ce,socialIconsToHide:Pe,socialMedia:De,socialTitle:Re,socialDescription:Me,sponsorByline:Ge,sponsoredContentHeaderProps:We,pageUrl:bt,showNativeShareButton:ht,venueAwards:rt,mediaWidth:et,contentAlign:Ve,contentPosition:Ue,theme:_e}),a.createElement(x,{ctaText:b,hideTopDisclaimerOnMobile:Y,offers:re,showHeaderButton:ve,buttonPosition:"content-header"}),pt?a.createElement($,{contentPosition:Ue,dangerouslySetInnerHTML:{__html:J.markup}}):!ke&&oe&&a.createElement(L,{awards:n,hasLightboxButton:H,hasStaticPositionedAward:G,hideLedeCaption:xe,hasDisabledCloseOnClickForLightbox:$e,lede:oe,captionWidth:c,shouldRenderRailAnchor:Qe,socialIcons:ae,mediaWidth:et,containerTheme:_e,hasInvertedLedeBackground:lt,ledeAlign:Je,showFullWidthLeadImage:Le,isBusinessContentHeader:Q,as:mt,className:i({["lead-asset--width-"+et]:et})}),!z&&D&&dt&&a.createElement(T,null,a.createElement(A,{dangerouslySetInnerHTML:{__html:D},assetPosition:je,mediaWidth:et,"data-testid":"ContentHeaderDek"}))),!ht&&F&&De&&a.createElement(B,{attributes:{shouldFadeOnMove:!0},align:se,anchorBottom:Oe,anchorTop:He,hasStickyBoxIndexPosition:j,fullWidthSelector:".container--full, .full-bleed-ad, .callout--feature-large"},a.createElement(w,Object.assign({},De,{className:"social-icons--share"}))))};D.propTypes={additionalPhotos:o.array,authorsTitleBlockPosition:o.oneOf(["above","below","hidden"]),awards:o.array,business:o.shape({address:o.object,phone:o.string,email:o.string,socialMedia:o.array}),bylineVariation:o.string,captionStyle:o.oneOf(["default","span-content-well"]),captionWidth:o.oneOf(["standard","fullbleed"]),className:o.string,contentHeaderCategories:o.shape({title:o.string,tags:o.array}),contentSponsorNames:o.array,contributorImage:o.shape(b.propTypes),contributors:o.shape(g.propTypes.contributors),ctaText:o.string,dangerousDek:o.string,dangerousHed:o.string,dividerType:o.oneOf(["both","bottom","top"]),hasContributorImageBackground:o.bool,hasDesktopTitleBlockDivider:o.bool,hasDisabledCloseOnClickForLightbox:o.bool,hasInvertedCaption:o.bool,hasInvertedLedeBackground:o.bool,hasLedeLightboxButton:o.bool,hasLightbox:o.bool,hasNarrowHeader:o.bool,hasNativeShareButton:o.bool,hasSlideshow:o.bool,hasStaticPositionedAward:o.bool,hasStickyBoxIndexPosition:o.bool,hasStickySocialIcons:o.bool,hideByLine:o.bool,hideContributors:o.bool,hideDangerousDek:o.bool,hideIssueDate:o.bool,hideIssueDatePipeSeparator:o.bool,hideLede:o.bool,hideLedeCaption:o.bool,hidePublishDate:o.bool,hideRubric:o.bool,hideSocialIconsOnMobile:o.bool,hideTopDisclaimerOnMobile:o.bool,hideTopRating:o.bool,interactiveOverride:o.shape({markup:o.string,behavior:o.string}),isBusinessContentHeader:o.bool,isLiveStoryType:o.bool,isStoryLive:o.bool,issueDate:o.string,issueLink:o.string,itemsCount:o.shape(l.propTypes),lede:o.oneOfType([o.shape(b.propTypes),o.shape(u.propTypes),o.shape(m.propTypes)]),ledeSocialIcons:o.shape(c.propTypes),metadataVideo:o.shape({isLive:o.bool,premiereDate:o.string,premiereGap:o.number,series:o.string,videoLength:o.number}),offers:o.array,persistentAsideAlign:o.oneOf(["left","left-lead-asset"]),price:o.string,publishDate:o.string.isRequired,rating:o.shape(h.propTypes),reviewRating:o.number,rubric:o.shape(p.propTypes),rubricVariation:o.string,shouldDisplayPremiereDate:o.bool,shouldEnableNativeShareOnDesktop:o.bool,shouldShortenHeadline:o.bool,showBreadCrumb:o.bool,showContentDivider:o.bool,showContributorImage:o.bool,showFullWidthLeadImage:o.bool,showHeaderButton:o.bool,showIssueCopyByDate:o.bool,showSponsorBlock:o.bool,showTextOverlayDek:o.bool,slideShowVariation:o.string,socialDescription:o.string,socialIconsToHide:o.array,socialMedia:o.shape(c.propTypes),socialTitle:o.string,sponsorByline:o.string,sponsoredContentHeaderProps:o.shape({campaignUrl:o.string,sponsorLogo:o.shape(b.propTypes),sponsorName:o.string}),stickySocialAnchorBottom:r.propTypes.anchorBottom,stickySocialAnchorTop:r.propTypes.anchorTop,theme:o.oneOf(["standard","inverted","special","live"]),variations:o.shape({assetPosition:o.oneOf(["bottom","middle"]),contentAlign:o.oneOf(["center","left"]),contentPosition:o.oneOf(["above","below","start","end"]),contentStyle:o.oneOf(["card","dense-card","item"]),copyWidth:o.oneOf(["grid","fullbleed"]),hasExtraSpaceBetweenSeparator:o.bool,hasInlinePublishDate:o.bool,hasLedeLightbox:o.bool,hasNoRowPadding:o.bool,hasXsNavSpacing:o.bool,leadRailAnchor:o.bool,ledeAlign:o.oneOf(["default","center"]),mediaWidth:o.oneOf(["small","smallrule","grid","fullbleed"]),publishDatePosition:o.oneOf(["top","bottom"]),reducedSpacings:o.bool}),venueAwards:o.string},D.defaultProps={authorsTitleBlockPosition:"hidden",business:{address:{},phone:"",email:"",socialMedia:[],link:""},captionStyle:"default",captionWidth:"standard",contentSponsorNames:[],dividerType:"both",hasContributorImageBackground:!1,hasDesktopTitleBlockDivider:!1,hasInvertedCaption:!1,hasInvertedLedeBackground:!0,hasLightbox:!1,hasNarrowHeader:!1,hasNativeShareButton:!1,hasSlideshow:!1,hasStaticPositionedAward:!1,hasStickySocialIcons:!0,hideByLine:!1,hideContributors:!1,hideDangerousDek:!1,hideIssueDatePipeSeparator:!1,hideLede:!1,hideLedeCaption:!1,hidePublishDate:!1,hideRubric:!1,hideSocialIconsOnMobile:!1,isLiveStoryType:!1,isStoryLive:!1,metadataVideo:{},persistentAsideAlign:"left",shouldDisplayPremiereDate:!1,shouldEnableNativeShareOnDesktop:!1,shouldShortenHeadline:!1,showContentDivider:!1,showContributorImage:!0,showFullWidthLeadImage:!1,showIssueCopyByDate:!1,showSponsorBlock:!1,showTextOverlayDek:!1,socialIconsToHide:[],stickySocialAnchorBottom:{selector:".page",edge:"bottom"},stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderContainer']",edge:"bottom"},theme:"standard",variations:{contentAlign:"center",contentPosition:"above",hasExtraSpaceBetweenSeparator:!1,hasInlinePublishDate:!1,hasLedeLightbox:!1,hasNoRowPadding:!1,hasXsNavSpacing:!1,leadRailAnchor:!1,ledeAlign:"default",publishDatePosition:"bottom",reducedSpacings:!1}},D.displayName="ContentHeader",e.exports=D},1415:function(e,t,n){const i=n(0),o=n(168),a=n(8),{createGlobalStyle:r}=n(3),s=n(1448),l=n(49),d=n(1546),c=n(1385),p=n(1384),{useIntl:g}=n(2),u=n(1416).default,m=n(432),h=n(1417),b=n(32),{trackComponent:y}=n(5),{LightboxCloseButtonIcon:f,LightboxSwipe:C,LightboxWrapper:v,LightboxSlidesWrapper:S}=n(509),{getColorToken:w,getZIndex:k}=n(4);let x;const $=r`
  .lightbox {
    height: 100vh;
  }

  .body__lightbox--open {
    overflow: hidden;
  }

  .lightbox__overlay {
    position: fixed;
    top: 0;
    left: 0;
    transition: opacity 0.2s;
    opacity: 0;
    z-index: ${k("hyperstitialLayer")};
    background-color: ${({theme:e})=>w(e,"colors.consumption.lead.standard.background")};

    &.lightbox__overlay--open {
      opacity: 1;

      &.lightbox__overlay--closing {
        opacity: 0;
      }
    }
  }

  .listicle-variation {
    overflow-y: scroll;
  }
`;e.exports={withLightbox:(e,t,n,r,w=!1)=>k=>{const[T,E]=i.useState(-1),{formatMessage:N}=g(),L=e=>n&&E(s(T+e,0,t.length-1)),I=T>-1,B=e=>{var t;"swipeClose"!==e&&("IMG"===(t=e.target).tagName||"SPAN"===t.tagName)||E(void 0)},A={transform:`translate(${"listicle"===r?"0":-100*T/t.length}%)`},P=()=>{x&&(x.style.height=window.innerHeight+"px")};i.useEffect(()=>{y("LightBox",{Component:e,slides:t,hasSlideShow:n,slideShowVariation:r})}),i.useEffect(()=>{const e=l(P,50);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),i.useEffect(()=>{!I&&x&&p.enableBodyScroll(x)},[I]);const D=(e,t)=>w?{}:t.reduce((t,n)=>Object.assign(Object.assign({},t),{[n]:t=>B(e||t)}),{});return i.createElement(v,null,i.createElement(m.Provider,{value:{expandHandler:e=>E(d(t,{id:e})),isInSlides:e=>c(t,{id:e})}},i.createElement(e,Object.assign({},k))),i.createElement(o,{className:a("lightbox "+(r?r+"-variation":"")),overlayClassName:{base:a("lightbox__overlay"),afterOpen:"lightbox__overlay--open",beforeClose:"lightbox__overlay--closing"},bodyOpenClassName:"body__lightbox--open",isOpen:I,onAfterOpen:()=>{p.disableBodyScroll(x),P()},onRequestClose:()=>{E(void 0)},contentRef:e=>{e&&(x=e)},closeTimeoutMS:200,contentLabel:N(u.contentLabel)},i.createElement(f,{ButtonIcon:b,isIconButton:!0,className:r?r+"-variation-close":"",dataAttrs:{"data-action":"close"},label:N(u.closeButtonIconLabel),onClickHandler:B,role:"button",ariaLabel:N(u.closeButtonIconLabel)}),i.createElement(C,Object.assign({},D("swipeClose",["onSwipeDown","onSwipeUp"]),{onSwipeRight:()=>L(-1),onSwipeLeft:()=>L(1),shouldPreventDefaultEvent:!0}),i.createElement(S,Object.assign({className:r?r+"-variation-slide-wrapper":"",style:A},D("",["onMouseDown","onTouchEnd"])),t.map(e=>i.createElement(h,Object.assign({},e,{className:r?r+"-variation-slide":"",key:e.id}))))),i.createElement($,null)))}}},1416:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({contentLabel:{id:"Lightbox.ContentLabel",defaultMessage:"Photo Gallery",description:"Lightbox component content label"},closeButtonIconLabel:{id:"Lightbox.CloseButtonIconLabel",defaultMessage:"Close Lightbox",description:"Lightbox component close button icon label"}})},1417:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};const o=n(1),a=n(0),r=n(66),s=n(11),l=n(59),{LightboxSlideWrapper:d,LightboxSlideTopSpacer:c,LightboxSlideImageCaptionOuter:p,LightboxSlideCaptionContainer:g}=n(509),u=e=>{var{caption:t,className:n,credit:o,dangerousCredit:l,dangerousCaption:u}=e,m=i(e,["caption","className","credit","dangerousCredit","dangerousCaption"]);const[h,b]=a.useState("landscape");return a.createElement(d,{className:n,screenOrientation:h},a.createElement(c,null),a.createElement(p,null,a.createElement(s,Object.assign({},m,{contentType:"photo",onAssetLoaded:({width:e,height:t})=>{e<t?b("portrait"):e>t?b("landscape"):e===t&&b("square")}})),a.createElement(g,null,a.createElement(r,{dangerousCaptionText:t||u,dangerousCredit:o||l,hasLinebreak:"portrait"===h}))))};u.propTypes=Object.assign(Object.assign({},l.propTypes),{caption:o.string,credit:o.string,dangerousCaption:o.string,dangerousCredit:o.string}),e.exports=u},1418:function(e,t,n){const i=n(1),o=n(0),{asConfiguredComponent:a}=n(9),r=n(74),s=n(43),l=n(510),d=n(511),c=n(1419),p=n(512),g=n(1423),u=n(124),{ContentHeaderContentDivider:m,ContentHeaderLowerBylineDateBlock:h,ContentHeaderItemCount:b,ContentHeaderHed:y,ContentHeaderTitleBlockWrapper:f}=n(170),C=e=>e.length>0?e[0]:null,v=({authorsPosition:e,business:t,bylineVariation:n,contentHeaderCategories:i,contentSponsorNames:a,contributors:r,dangerousHed:s,dividerType:v,hasContentDivider:S,hasDesktopTitleBlockDivider:w,hasExtraSpaceBetweenSeparator:k,hideIssueDate:x,hideIssueDatePipeSeparator:$,hasNoRowPadding:T,hidePublishDate:E,hideRubric:N,isBusinessContentHeader:L,isLiveStoryType:I,isStoryLive:B,issueDate:A,issueLink:P,itemsCount:D,metadataVideo:R,price:M,publishDate:O,publishDatePosition:H,rubric:_,rubricVariation:W,shouldDisplayLiveIndicator:G,showIssueCopyByDate:j,showItemCount:F,theme:V})=>{const U=S&&"above"!==e,z=w&&("both"===v||"top"===v);return o.createElement(f,{rowWithTopBorder:z,isBusinessContentHeader:L,"data-testid":"ContentHeaderTitleBlockWrapper"},R.isLive&&G&&o.createElement(u,null),o.createElement(c,{authorsPosition:e,bylineVariation:n,contributors:r,hasExtraSpaceBetweenSeparator:k,hasNoRowPadding:T,hideIssueDate:x,hideIssueDatePipeSeparator:$,hidePublishDate:E,hideRubric:N,isLiveStoryType:I,isStoryLive:B,issueDate:A,issueLink:P,price:M,publishDate:O,publishDatePosition:H,rubric:_,rubricVariation:W,showIssueCopyByDate:j,sponsorName:C(a),theme:V}),o.createElement(p,Object.assign({},i)),o.createElement(y,{dangerouslySetInnerHTML:{__html:s},"data-testid":"ContentHeaderHed"}),"below"===e&&o.createElement(h,null,o.createElement(l,{bylineVariation:n,contributors:r}),o.createElement(d,{hasExtraSpaceBetweenSeparator:k,hidePublishDate:E,publishDate:O})),F&&D&&o.createElement(b,Object.assign({},D)),U&&o.createElement(m,null),L&&o.createElement(g,{address:null==t?void 0:t.address,phone:null==t?void 0:t.phone,email:null==t?void 0:t.email,socialMedia:null==t?void 0:t.socialMedia,link:null==t?void 0:t.url}))};v.propTypes={authorsPosition:i.oneOf(["above","below","hidden"]),business:i.shape({address:i.object,phone:i.string,email:i.string,socialMedia:i.array,url:i.string}),bylineVariation:i.string,contentHeaderCategories:i.shape({title:i.string,tags:i.array,hasCategoryEyebrow:i.boolean}),contentSponsorNames:i.array,contributors:i.object,dangerousHed:i.string.isRequired,dividerType:i.string,hasContentDivider:i.bool,hasDesktopTitleBlockDivider:i.bool,hasExtraSpaceBetweenSeparator:i.bool,hasNoRowPadding:i.bool,hideIssueDate:i.bool,hideIssueDatePipeSeparator:i.bool,hidePublishDate:i.bool,hideRubric:i.bool,isBusinessContentHeader:i.bool,isLiveStoryType:i.bool,isStoryLive:i.bool,issueDate:i.string,issueLink:i.string,itemsCount:i.shape(r.propTypes),metadataVideo:i.shape({isLive:i.bool,premiereDate:i.string,series:i.string,videoLength:i.number}),price:i.string,publishDate:i.string,publishDatePosition:i.oneOf(["top","bottom"]),rubric:i.shape(s.propTypes),rubricVariation:i.string,shouldDisplayLiveIndicator:i.bool,showIssueCopyByDate:i.bool,showItemCount:i.bool,theme:i.oneOf(["standard","inverted","special"])},v.defaultProps={authorsPosition:"hidden",contentHeaderCategories:{hasCategoryEyebrow:!1},contentSponsorNames:[],dividerType:"both",hasDesktopTitleBlockDivider:!1,hasExtraSpaceBetweenSeparator:!1,hasNoRowPadding:!1,hideIssueDate:!0,hideIssueDatePipeSeparator:!1,hidePublishDate:!1,hideRubric:!1,isBusinessContentHeader:!1,metadataVideo:{},publishDatePosition:"bottom",shouldDisplayLiveIndicator:!1,showIssueCopyByDate:!1,showItemCount:!1,theme:"standard"},v.displayName="TitleBlock",e.exports=a(v,"TitleBlock"),e.exports.TitleBlock=v},1419:function(e,t,n){const i=n(1),o=n(0),a=n(124),r=n(43),s=n(510),l=n(1420),d=n(511),{ContentHeaderSponsorName:c,ContentHeaderRubricBlock:p,ContentHeaderRubricDateBlock:g,ContentHeaderRubricPrice:u,ContentHeaderRubricContainer:m,ContentHeaderLiveIndicator:h}=n(154),b=({authorsPosition:e,bylineVariation:t,contributors:n,hasExtraSpaceBetweenSeparator:i,hideIssueDate:b,hideIssueDatePipeSeparator:y,hidePublishDate:f,hideRubric:C,isLiveStoryType:v,isStoryLive:S,issueDate:w,issueLink:k,price:x,publishDate:$,publishDatePosition:T,rubric:E,rubricVariation:N,showIssueCopyByDate:L,sponsorName:I})=>{const B=r[N]||r,A=!b&&w&&E,P=("above"===e||"top"===T)&&!I;return v&&S?o.createElement(h,null,o.createElement(a,{hasBackground:!0,isDiscovery:!1,shouldEnableAnimation:!0})):!(E||w||n)||C?null:(E||w||n)&&o.createElement(p,{hasIssueDateAndRubricBlock:A,"data-testid":"ContentHeaderRubric"},"above"===e&&o.createElement(s,{bylineVariation:t,contributors:n}),o.createElement(g,{"data-testid":"ContentHeaderRubricDateBlock"},E&&o.createElement(m,Object.assign({},E,{isVerticalAlign:"above"===e||"top"===T||A,as:B})),x&&o.createElement(u,null,"/ ",x),I&&o.createElement(c,{hasExtraSpaceBetweenSeparator:i,items:[{name:I}]}),P&&o.createElement(d,{hasExtraSpaceBetweenSeparator:i,hidePublishDate:f,publishDate:$})),o.createElement(l,{hideIssueDate:b,hideIssueDatePipeSeparator:y,issueDate:w,issueLink:k,showIssueCopyByDate:L}))};b.propTypes={authorsPosition:i.string,bylineVariation:i.string,contributors:i.object,hasExtraSpaceBetweenSeparator:i.bool,hasNoRowPadding:i.bool,hideIssueDate:i.bool,hideIssueDatePipeSeparator:i.bool,hidePublishDate:i.bool,hideRubric:i.bool,isLiveStoryType:i.bool,isStoryLive:i.bool,issueDate:i.string,issueLink:i.string,price:i.string,publishDate:i.string,publishDatePosition:i.string,rubric:i.shape(r.propTypes),rubricVariation:i.string,showIssueCopyByDate:i.bool,sponsorName:i.string},b.defaultProps={isLiveStoryType:!1,isStoryLive:!1},e.exports=b},1420:function(e,t,n){const i=n(1),o=n(0),{ContentHeaderRubricIssueDate:a}=n(154),r=({hideIssueDate:e,hideIssueDatePipeSeparator:t,issueDate:n,issueLink:i,showIssueCopyByDate:r})=>e||!n?null:o.createElement(a,{name:`${n}${r?" Issue":""}`,url:i,hideIssueDatePipeSeparator:t});r.propTypes={hideIssueDate:i.bool,hideIssueDatePipeSeparator:i.bool,issueDate:i.string,issueLink:i.string,showIssueCopyByDate:i.bool},e.exports=r},1421:function(e,t,n){const i=n(1),o=n(0),{CategoriesWrapper:a,CategoriesTitle:r,CategoriesItemList:s,CategoriesItem:l,CategoriesLink:d}=n(1422),c=({title:e,tags:t})=>o.createElement(a,null,o.createElement(r,null,e),o.createElement(s,null,t.map(e=>o.createElement(l,{key:e.name},o.createElement(d,{href:e.slug},e.name)))));c.propTypes={tags:i.array,title:i.string},c.defaultProps={tags:[]},c.displayName="Categories",e.exports=c},1422:function(e,t,n){const{default:i}=n(3),{BaseText:o,BaseLink:a}=n(10),{calculateSpacing:r,getColorToken:s,getLinkStyles:l}=n(4),d=i.div.withConfig({displayName:"CategoriesWrapper"})`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-top: ${r(.5)};
`,c=i(o).withConfig({displayName:"CategoriesTitle"})`
  margin-right: ${r(1)};
`;c.defaultProps={as:"div",colorToken:"colors.consumption.lead.standard.accreditation",typeIdentity:"typography.definitions.globalEditorial.accreditation-feature"};const p=i.ul.withConfig({displayName:"CategoriesItemList"})`
  margin: 0;
  padding: 0;
  line-height: 1;
`,g=i.li.withConfig({displayName:"CategoriesItem"})`
  display: inline-block;

  &:not(:last-child) {
    &::after {
      margin: 0 ${r(1)};
      color: ${({theme:e})=>s(e,"colors.consumption.lead.standard.divider")};
      content: '|';
    }
  }
`,u=i(a).withConfig({displayName:"CategoriesLink"})`
  ${({theme:e})=>l(e,"colors.consumption.lead.standard.link",null,"global")};
`;u.defaultProps={typeToken:"typography.definitions.globalEditorial.accreditation-core"},e.exports={CategoriesWrapper:d,CategoriesTitle:c,CategoriesItemList:p,CategoriesItem:g,CategoriesLink:u}},1423:function(e,t,n){const i=n(0),o=n(1),{AddressBlockWrapper:a,HeaderSocialInformation:r}=n(170),s=n(230),l=n(231),d=n(1424),c=({address:e,email:t,phone:n,socialMedia:o,link:c})=>{if(!e&&!n&&!t)return null;const{street:p,city:g,state:u,postalCode:m,country:h}=e,b=[];return[p,g,u,m,h].forEach(e=>{e&&b.push(e)}),i.createElement(a,null,e&&i.createElement("div",{"data-testid":"HeaderAddressDetails"},p&&i.createElement("span",{"data-testid":"HeaderAddressStreet"},p),g&&i.createElement("span",{"data-testid":"HeaderAddressCity"},b[0]!==g&&", ",g),u&&i.createElement("span",{"data-testid":"HeaderAddressState"},b[0]!==u&&", ",u),m&&i.createElement("span",{"data-testid":"HeaderAddressPostalCode"},b[0]!==m&&", ",m),h&&i.createElement("span",{"data-testid":"HeaderAddressCountry"},b[0]!==h&&", ",h)),n&&i.createElement("div",{"data-testid":"HeaderAddressPhone",dangerouslySetInnerHTML:{__html:n}}),i.createElement(r,null,t&&i.createElement("a",{"data-testid":"HeaderAddressEmail",href:"mailto:"+t,"aria-label":t,rel:"nofollow noopener noreferrer",target:"_blank"},s()),c&&i.createElement("a",{"data-testid":"HeaderAddressEmail",href:c,"aria-label":c,rel:"nofollow noopener noreferrer",target:"_blank"},d()),(null==o?void 0:o.length)>0&&i.createElement("a",{"data-testid":"HeaderAddressInstagram",href:o[0].handle,"aria-label":o[0].network,rel:"nofollow noopener noreferrer",target:"_blank"},l())))};c.propTypes={address:o.object,email:o.string,link:o.string,phone:o.string,socialMedia:o.array},e.exports=c},1424:function(e,t,n){const i=n(0),{useIntl:o}=n(2),a=n(7).default;e.exports=()=>{const{formatMessage:e}=o();return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none"},i.createElement("title",null,e(a.weblink)),i.createElement("path",{d:"M15.8136 11.1823L17.6157 9.38027C18.3786 8.68488 19.3802 8.31019 20.4122 8.33408C21.4443 8.35797 22.4275 8.77861 23.1574 9.50857C23.8874 10.2385 24.3081 11.2217 24.3319 12.2537C24.3558 13.2858 23.9812 14.2874 23.2858 15.0503L20.7101 17.6169C20.3389 17.9894 19.8978 18.2851 19.412 18.4868C18.9263 18.6885 18.4056 18.7924 17.8796 18.7924C17.3537 18.7924 16.8329 18.6885 16.3472 18.4868C15.8615 18.2851 15.4203 17.9894 15.0491 17.6169M16.8524 21.4857L15.0503 23.2878C14.2874 23.9832 13.2858 24.3578 12.2537 24.334C11.2217 24.3101 10.2385 23.8894 9.50858 23.1595C8.77861 22.4295 8.35797 21.4463 8.33408 20.4143C8.3102 19.3822 8.68488 18.3807 9.38029 17.6177L11.9559 15.0512C12.3271 14.6786 12.7682 14.3829 13.254 14.1812C13.7397 13.9795 14.2604 13.8756 14.7864 13.8756C15.3123 13.8756 15.8331 13.9795 16.3188 14.1812C16.8045 14.3829 17.2457 14.6786 17.6169 15.0512",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))}},1425:function(e,t,n){const i=n(0),{useIntl:o}=n(2),a=n(1),r=n(513),s=n(1405),l=n(11),d=n(109),c=n(20),p=n(161),g=n(178).default,u=n(514),m=n(434),{ContentHeaderByline:h,ContentHeaderAccreditationSocialIcons:b,ContentHeaderContributorImage:y,ContentHeaderNativeShareButton:f,ContentHeaderBylineContent:C,ContentHeaderDekRewards:v,ContentHeaderAccreditation:S,ContentHeaderDek:w,SummaryPremiereWrapper:k}=n(243),x=({venueAwards:e})=>i.createElement(i.Fragment,null,e&&i.createElement(v,{dangerouslySetInnerHTML:{__html:e}}));x.propTypes={venueAwards:a.string};const $=({bylinesBlock:e,contributorImage:t,dangerousDek:n,dividerType:a,hasContributorImageBackground:l,hasDesktopTitleBlockDivider:c,hasLede:v,hasStickySocialIcons:$,hideByLine:T,hideDangerousDek:E,hideSocialIconsOnMobile:N,hideTopRating:L,isBusinessContentHeader:I,isMiddleImage:B,isSponsoredContent:A,showSponsorBlock:P,sponsorByline:D,sponsoredContentHeaderProps:R,isLiveStoryType:M,metadataVideo:O,publishDateBlock:H,publishDatePosition:_,rating:W,reviewRating:G,shouldShowAuthorsInTitleBlock:j,showContributorImage:F,socialIconsToHide:V,socialMedia:U,socialTitle:z,socialDescription:q,pageUrl:K,shouldDisplayPremiereDate:Y,showNativeShareButton:Z,venueAwards:X,theme:J})=>{const{rating:Q,count:ee}=W||{},te=x({venueAwards:X}),ne={showDek:!E&&n&&!B,showVenueAwards:X,showByline:!j&&!A&&!T,showNativeShareButton:Z,socialMedia:U},{isLive:ie,premiereGap:oe,premiereDate:ae}=O,{formatMessage:re}=o();return i.createElement(S,{className:"content-header__accreditation",shouldShowAuthorsInTitleBlock:j,isBusinessContentHeader:I,hasLede:v,rowWithBottomBorder:c&&("both"===a||"bottom"===a),visibilityInfo:ne,"data-testid":"ContentHeaderAccreditation"},ne.showDek&&i.createElement(w,{dangerouslySetInnerHTML:{__html:n},as:"div"}),Y&&ae&&!ie&&i.createElement(k,null,i.createElement(m,{premiereDate:ae,premiereGap:oe,containerTheme:J,hideTimeStampIcon:!0})),M&&P&&i.createElement(u,{sponsorByline:D,sponsoredContentHeaderProps:Object.assign({},R),theme:J}),te,G&&!L&&i.createElement(s,{rating:G}),ne.showByline&&i.createElement(h,{isLiveStoryType:M,sponsorName:null==R?void 0:R.sponsorName,showSponsorBlock:P},F&&t&&i.createElement(y,Object.assign({},t,{sizes:"66px",hasContributorImageBackground:l,isBusinessContentHeader:I})),i.createElement(C,null,e,"bottom"===_&&H)),Z?i.createElement(f,null,i.createElement(p,{shareData:{url:K,title:z,text:q}})):U&&i.createElement(b,Object.assign({},U,{className:"content-header__social-share",hideSocialIconsOnMobile:N,hasStickySocialIcons:$,socialIconsToHide:V})),!!Q&&!!ee&&i.createElement(d,{averageRatingCount:Math.round(10*Q)/10,hasBorderTop:!0,link:{label:re(g.readReviews),onClick:e=>{e.preventDefault();const t=document.getElementById("reviews"),{top:n}=r(t);window.scrollTo(0,n-56)},url:"#reviews"},totalRatingCount:ee}))};$.propTypes={bylinesBlock:a.node,contributorImage:a.shape(l.propTypes),dangerousDek:a.string,dividerType:a.string,hasContributorImageBackground:a.bool,hasDesktopTitleBlockDivider:a.bool,hasLede:a.bool,hasStickySocialIcons:a.bool,hideByLine:a.bool,hideDangerousDek:a.bool,hideSocialIconsOnMobile:a.bool,hideTopRating:a.bool,isBusinessContentHeader:a.bool,isLiveStoryType:a.bool,isMiddleImage:a.bool,isSponsoredContent:a.bool,metadataVideo:a.shape({isLive:a.bool,premiereDate:a.string,premiereGap:a.number,series:a.string,videoLength:a.number}),pageUrl:a.string,publishDateBlock:a.node,publishDatePosition:a.string,rating:a.shape(d.propTypes),reviewRating:a.number,shouldDisplayPremiereDate:a.bool,shouldShowAuthorsInTitleBlock:a.bool,showContributorImage:a.bool,showNativeShareButton:a.bool,showSponsorBlock:a.bool,socialDescription:a.string,socialIconsToHide:a.array,socialMedia:a.shape(c.propTypes),socialTitle:a.string,sponsorByline:a.string,sponsoredContentHeaderProps:a.shape({campaignUrl:a.string,sponsorLogo:a.shape(l.propTypes),sponsorName:a.string}),theme:a.oneOf(["standard","inverted","special"]),venueAwards:a.string},$.defaultProps={hideByLine:!1,hideDangerousDek:!1,isLiveStoryType:!1,metadataVideo:{},shouldDisplayPremiereDate:!1,showSponsorBlock:!1,socialIconsToHide:[],theme:"standard"},e.exports=$},1426:function(e,t,n){const i=n(1),o=n(8),a=n(0),{useIntl:r}=n(2),s=n(431),l=n(14),d=n(226),{trackComponent:c}=n(5),p=n(1427).default,{ReviewRatingDataLabel:g,ReviewRatingDataWrapper:u,ReviewRatingDataValue:m,ReviewRatingDataExplainer:h,ReviewRatingDataExplainerModal:b,ReviewRatingDataExplainerModalList:y,ReviewRatingDataExplainerModalListRating:f,ReviewRatingDataExplainerModalListDescribe:C}=n(1428),v=({className:e,rating:t,ratingList:n})=>{a.useEffect(()=>{c("ReviewRatingData")},[]);const i=r(),[v,S]=a.useState(!0),w=()=>{S(!v)},k=a.createElement(b,{className:"review-rating-data__rating-explainer-modal"},n.map((e,t)=>a.createElement(y,{key:e},a.createElement(f,{as:"span"},t+1),a.createElement(C,{as:"span"},e))));return a.createElement(u,{className:o("review-rating-data",e)},a.createElement(g,{className:"review-rating-data__label"},i.formatMessage(p.dataLabel)),a.createElement(m,null,t,"/10"),a.createElement(h,null,a.createElement(l.Utility,{isIconButton:!0,ButtonIcon:s,className:"review-rating-data__info-button",label:i.formatMessage(p.buttonLabel),onClickHandler:w,role:"button"}),!v&&a.createElement(d,{className:"alert__tooltip",arrowPosition:52,gaIdentifier:"review-rating-explainer",isVisible:!0,isTooltip:!0,onClose:w,shouldUseArrow:!0},k)))};v.propTypes={className:i.string,rating:i.number,ratingList:i.array},v.defaultProps={rating:0,ratingList:[]},v.displayName="ReviewRatingData",e.exports=v},1427:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({dataLabel:{id:"ReviewRatingData.DataLabel",defaultMessage:"Rating:",description:"Label for rating"},buttonLabel:{id:"ReviewRatingData.ButtonLabel",defaultMessage:"Open rating explainer",description:"Label for rating explainer button"}})},1428:function(e,t,n){const i=n(3).default,{BaseText:o}=n(10),{calculateSpacing:a,getTypographyStyles:r,getColorToken:s}=n(4),l=i.div.withConfig({displayName:"ReviewRatingDataWrapper"})`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  margin-top: ${a(2)};
  width: 100%;
`,d=i(o).withConfig({displayName:"ReviewRatingDataLabel"})`
  margin-right: ${a(1)};
`;d.defaultProps={as:"span",typeIdentity:"typography.definitions.consumptionEditorial.subhed-aux-primary"};const c=i(o).withConfig({displayName:"ReviewRatingDataValue"})`
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.subhed-aux-primary")}
  color: ${({theme:e})=>s(e,"colors.consumption.body.standard.subhed")};
`,p=i.div.withConfig({displayName:"ReviewRatingDataExplainer"})`
  margin-left: ${a(.5)};

  .review-rating-data__info-button,
  .review-ratingdata__close-button {
    margin: 0;
    border: 0;
    background-color: ${({theme:e})=>s(e,"colors.interactive.base.white")};
    fill: ${({theme:e})=>s(e,"colors.consumption.body.standard.accent")};
    padding: 0;

    &:hover,
    &:focus {
      border: 0;
      background: none;
    }
  }

  .icon {
    padding-right: 5px;
    width: 24px;
    height: 24px;
  }

  .review-rating-data__info-button {
    .button__icon-container,
    .icon {
      padding-right: 0;
      width: 18px;
      height: 18px;
    }
  }

  .icon.icon-close {
    width: 35px;
    height: 35px;
  }
`,g=i.div.withConfig({displayName:"ReviewRatingDataExplainerModal"})`
  padding: ${a(2)} 0 ${a(2)}
    ${a(2)};
`,u=i.div.withConfig({displayName:"ReviewRatingDataExplainerModalList"})`
  display: flex;
  letter-spacing: 0;
`,m=i.span.withConfig({displayName:"ReviewRatingDataExplainerModalListRating"})`
  flex: 1;
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.citation")}
  font-weight: bold;
`,h=i.span.withConfig({displayName:"ReviewRatingDataExplainerModalListDescribe"})`
  flex: 9;
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.citation")}
`;e.exports={ReviewRatingDataLabel:d,ReviewRatingDataWrapper:l,ReviewRatingDataValue:c,ReviewRatingDataExplainer:p,ReviewRatingDataExplainerModal:g,ReviewRatingDataExplainerModalList:u,ReviewRatingDataExplainerModalListRating:m,ReviewRatingDataExplainerModalListDescribe:h}},1429:function(e,t,n){const{default:i}=n(3),{BREAKPOINTS:o}=n(6),{calculateSpacing:a,getColorToken:r,getTypographyStyles:s}=n(4),l=n(11),{SpanWrapper:d}=n(86),c=n(31),p=i.div.withConfig({displayName:"SponsorContentContainer"})`
  margin-top: ${a(3)};
  text-align: center;
  ${d} {
    display: inline-flex;
    margin-top: 0;
    margin-bottom: 0;
    width: 66px;
  }
`,g=i(l).withConfig({displayName:"SponsorImage"})`
  margin-right: auto;
  margin-left: auto;

  img {
    border: 1px solid;
    border-radius: 50%;
    ${({containerTheme:e,theme:t})=>((e,t)=>"inverted"===e||"special"===e?`\n      border-color: ${r(t,"colors.consumption.lead.inverted.divider")};\n    `:`\n    border-color: ${r(t,"colors.consumption.lead.standard.divider")};\n  `)(e,t)}
    width: 64px;
    height: 64px;
  }
`,u=i.div.withConfig({displayName:"SponsoredContent"})`
  ${({theme:e})=>s(e,"typography.definitions.globalEditorial.syndication")}

  display: block;
  margin: ${a(2,"px")} 0 ${a(2,"px")};
  ${({containerTheme:e,theme:t})=>((e,t)=>"inverted"===e||"special"===e?`\n      color: ${r(t,"colors.consumption.lead.inverted.syndication")};\n    `:`\n    color: ${r(t,"colors.consumption.lead.standard.syndication")};\n  `)(e,t)}

  @media (min-width: 0) and (max-width: ${o.md}) {
    margin: ${a(1.5,"px")} 0 ${a(1.5,"px")};
  }
`,m=i(c).withConfig({displayName:"SponsoredContentCampaignLink"})`
  text-decoration: none;
`;e.exports={SponsorContentContainer:p,SponsorImage:g,SponsoredContent:u,SponsoredContentCampaignLink:m}},1430:function(e,t,n){const i=n(1431);e.exports=i},1431:function(e,t,n){const i=n(0),o=n(1),a=n(66),r=n(43),s=n(161),l=n(36),d=n(11),c=n(176),p=n(92),g=n(20),u=n(512),m=n(1432),h=n(124),{useNativeShare:b}=n(94),{TextOverlayLogo:y,TextOverlayLogoLink:f,TextOverlayLogoImage:C,TextOverlayWrapper:v,ImageWrapper:S,Content:w,ContentAlign:k,Hed:x,DekWrapper:$,Dek:T,Figure:E,ContentDivider:N,ContributorImage:L,Accreditation:I,PublishDate:B,DekAndCaption:A,ContentGrid:P}=n(515),D=n(232),R=n(514),M=({background:e,bylineVariation:t,contentAlign:n,contentHeaderCategories:o,contributorImage:c,contributors:p,dangerousDek:M,dangerousHed:O,hasNativeShareButton:H,hideContributors:_,hideDangerousDek:W,hideLedeCaption:G,hidePublishDate:j,hideShareButtons:F,hideRubric:V,isLiveStoryType:U,isStoryLive:z,lede:q,logoImage:K,logoBaseUrl:Y,numberOfLinesToClamp:Z,publishDate:X,rubric:J,shouldUseCutomColorLiveIndicator:Q,showContentDivider:ee,showContributorImage:te,showLogo:ne,showTextOverlayDek:ie,showSponsorBlock:oe,socialDescription:ae,socialMedia:re,socialTitle:se,theme:le,sponsoredContentHeaderProps:de,sponsorByline:ce,variations:{isFeatured:pe}})=>{const{showNativeShareButton:ge,pageUrl:ue}=b(H),me="inverted"===le,he=q&&!G&&(q.caption&&q.caption.trim()||q.credit&&q.credit.trim());return i.createElement(v,{"data-testid":"ContentHeader"},i.createElement(S,{background:e,contentAlign:n},i.createElement(m,{lede:q}),ne&&K?i.createElement(y,null,i.createElement(f,{href:Y},i.createElement(C,Object.assign({},K)))):null,i.createElement(P,{contentAlign:n},i.createElement(w,null,!V&&(U&&z?i.createElement(k,{contentAlign:n},i.createElement(h,{hasBackground:!0,isDiscovery:!1,shouldEnableAnimation:!0,shouldUseCutomColorLiveIndicator:Q})):J?i.createElement(k,{contentAlign:n,"data-testid":"ContentHeaderRubric"},i.createElement(r.Inverted,Object.assign({},J))):null),i.createElement(k,{contentAlign:n},i.createElement(u,Object.assign({},o))),i.createElement(x,{dangerouslySetInnerHTML:{__html:O},"data-testid":"ContentHeaderHed",contentAlign:n,isFeatured:pe}),!W&&M&&ie&&i.createElement(T,{dangerouslySetInnerHTML:{__html:M},contentAlign:n,"data-testid":"ContentHeaderDek",isInverted:me}),ee&&i.createElement(N,{contentAlign:n}),U&&oe?i.createElement(R,{sponsorByline:ce,sponsoredContentHeaderProps:Object.assign({},de)}):null,te&&c&&i.createElement(L,{contentAlign:n},i.createElement(d,Object.assign({},c))),i.createElement(I,{contentAlign:n},p&&!_&&i.createElement(l,{contributors:p,bylineVariation:t,contentAlign:n,isCompact:!1}),!j&&i.createElement(B,{"data-testid":"ContentHeaderPublishDate",contentAlign:n},X)),!F&&(ge?i.createElement(k,{contentAlign:n,bottomSpacing:4},i.createElement(s,{hasDarkBackground:!0,shareData:{url:ue,title:se,text:ae},theme:"inverted"})):re&&i.createElement(k,{contentAlign:n,bottomSpacing:4},i.createElement(g.Footer,Object.assign({},re))))))),(he||M&&!W)&&i.createElement(A,{isInverted:me},he&&i.createElement(E,{contentAlign:n},i.createElement(a,{dangerousCaptionText:q.caption,dangerousCredit:q.credit,topSpacing:0,theme:le})),!W&&M&&!ie&&i.createElement($,null,i.createElement(D,{isCollapsible:!0,lines:Z},i.createElement(T,{dangerouslySetInnerHTML:{__html:M},contentAlign:n,"data-testid":"ContentHeaderDek",isInverted:me})))))};M.defaultProps={background:"gradient",bylineVariation:"Inverted",contentAlign:"center",hideContributors:!1,hideDangerousDek:!1,hideLedeCaption:!1,isLiveStoryType:!1,isStoryLive:!1,logoBaseUrl:"/",numberOfLinesToClamp:2,shouldUseCutomColorLiveIndicator:!1,showContentDivider:!1,showContributorImage:!0,showSponsorBlock:!1,showTextOverlayDek:!1,variations:{}},M.propTypes={background:o.oneOf(["gradient","solid"]),bylineVariation:o.string,contentAlign:o.oneOf(["center","left"]),contentHeaderCategories:o.shape({title:o.string,tags:o.array}),contributorImage:o.shape(d.propTypes),contributors:o.shape(l.propTypes.contributors),dangerousDek:o.string,dangerousHed:o.string,hasNativeShareButton:o.bool,hideContributors:o.bool,hideDangerousDek:o.bool,hideLedeCaption:o.bool,hidePublishDate:o.bool,hideRubric:o.bool,hideShareButtons:o.bool,isLiveStoryType:o.bool,isStoryLive:o.bool,lede:o.oneOfType([o.shape(d.propTypes),o.shape(c.propTypes),o.shape(p.propTypes)]),logoBaseUrl:o.string,logoImage:o.shape(d.propTypes),numberOfLinesToClamp:o.number,publishDate:o.string,rubric:o.shape(r.propTypes),shouldUseCutomColorLiveIndicator:o.bool,showContentDivider:o.bool,showContributorImage:o.bool,showLogo:o.bool,showSponsorBlock:o.bool,showTextOverlayDek:o.bool,socialDescription:o.string,socialMedia:o.shape(g.propTypes),socialTitle:o.string,sponsorByline:o.string,sponsoredContentHeaderProps:o.shape({campaignUrl:o.string,sponsorLogo:o.shape(d.propTypes),sponsorName:o.string}),theme:o.oneOf(["standard","inverted","special"]),variations:o.shape({isFeatured:o.bool})},M.displayName="TextOverlay",e.exports=M},1432:function(e,t,n){const i=n(0),o=n(1),a=n(11),r=n(176),s=n(92),{transformLegacySources:l}=n(94),{Image:d}=n(515),c=({lede:e})=>{if(!e||0===Object.keys(e).length)return null;const t="cnevideo"===e.modelName,n="gallery"===e.modelName,o=l(e);return i.createElement(d,null,!t&&!n&&i.createElement(a,Object.assign({},o)),t&&e.scriptEmbedUrl&&i.createElement(s,{shouldAutoplay:!0,scriptUrl:e.scriptEmbedUrl}),n&&i.createElement(r,Object.assign({},e,{showNoAdsFromParent:!0})))};c.defaultProps={lede:null},c.propTypes={lede:o.oneOfType([o.shape(a.propTypes),o.shape(r.propTypes),o.shape(s.propTypes)])},c.displayName="ImageBlock",e.exports=c},1433:function(e,t,n){e.exports=n(1434)},1434:function(e,t,n){const i=n(8),o=n(1),a=n(0),{useIntl:r}=n(2),s=n(40),l=n(1435).default,{mapSourcesToSegmentedSources:d}=n(126),c=n(1436),p=n(11),g=n(43),u=n(1406),m=n(1437),h=n(36),b=n(140),y=n(20),f=n(109),C=n(513),{formatInfoSliceItems:v}=n(1442),S=n(161),{useNativeShare:w}=n(94),{getThemedBylineVariation:k}=n(248),{trackComponent:x}=n(5),{SplitScreenContentHeaderArtist:$,SplitScreenContentHeaderArtistSlash:T,SplitScreenContentHeaderArtistWrapper:E,SplitScreenContentHeaderByline:N,SplitScreenContentHeaderCaption:L,SplitScreenContentHeaderContributorImage:I,SplitScreenContentHeaderDek:B,SplitScreenContentHeaderDekDown:A,SplitScreenContentHeaderDivider:P,SplitScreenContentHeaderHed:D,SplitScreenContentHeaderMain:R,SplitScreenContentHeaderInfoSlice:M,SplitScreenContentHeaderForMusicReview:O,SplitScreenContentHeaderNativeShareButton:H,SplitScreenContentHeaderPublishDate:_,SplitScreenContentHeaderRating:W,SplitScreenContentHeaderRubric:G,SplitScreenContentHeaderRubricIssueDate:j,SplitScreenContentHeaderSignageRubric:F,SplitScreenContentHeaderSocialShare:V,SplitScreenContentHeaderTitleBlock:U,SplitScreenContentHeaderWrapper:z,SplitScreenContentHeaderScoreBox:q,SplitScreenContentHeaderLeadWrapper:K,SplitScreenContentHeaderArtistLink:Y,SplitScreenContentHeaderGrid:Z,SplitScreenContentHeaderPersistentAside:X,SplitScreenContentHeaderReleaseYear:J}=n(246),{SplitScreenContentHeaderSocialIcons:Q}=n(439),{doHideBookmark:ee,doDisplayBookmark:te}=n(435),ne=({contributors:e,contributorsPosition:t,hasInvertedBylineLink:n,hideContributors:i,hideIssueDate:o,hidePublishDate:r,issueDate:s,issueDatePostfix:l,issueLink:d,publishDate:c,publishDatePosition:p,rubric:u,rubricVariation:m,hideRubric:h,themedBylineVariation:b})=>{const y=g[m]||g,f=g.Item,C=e&&0!==Object.keys(e).length;return a.createElement("div",{"data-testid":"ContentHeaderRubric"},C&&!i&&"top"===t&&a.createElement(N,{contributors:e,bylineVariation:b,isCompact:!1,contributorsPosition:t,hasInvertedBylineLink:n}),u&&!h&&a.createElement(G,Object.assign({as:y},u)),!o&&s&&a.createElement(j,{as:f,name:l?`${s}${l}`:s,url:d}),!r&&c&&"top"===p&&a.createElement(_,{"data-testid":"ContentHeaderPublishDate"},c))};ne.propTypes={contributors:o.object,contributorsPosition:o.oneOf(["top","bottom"]),hasInvertedBylineLink:o.bool,hideContributors:o.bool,hideIssueDate:o.bool,hidePublishDate:o.bool,hideRubric:o.bool,issueDate:o.string,issueDatePostfix:o.string,issueLink:o.string,publishDate:o.string,publishDatePosition:o.oneOf(["top","bottom"]),rubric:o.shape(g.propTypes),rubricVariation:o.string,themedBylineVariation:o.string};const ie=({signage:e,shouldDisplaySignage:t})=>e&&t?a.createElement("div",{"data-testid":"ContentHeaderRubricSignage"},a.createElement(F,{name:e})):null;ie.propTypes={shouldDisplaySignage:o.bool,signage:o.string};const oe=(e,t,n,i,o)=>i&&a.createElement(V,Object.assign({},i,{hasSocialShare:!0,hasStickySocialIcons:e,hideSocialIconsOnMobile:t,socialIconsToHide:n,socialMediaPositionInMobile:o})),ae=(e,t)=>((null==t?void 0:t.caption)||(null==t?void 0:t.credit))&&!e&&a.createElement(Z,null,a.createElement(L,{dangerousCaptionText:t.caption,dangerousCredit:t.credit})),{useRef:re,useEffect:se}=a,le=({artists:e,brandSlug:t,captionPosition:o,className:p,contentAlign:g,contributorImage:h,dangerousHed:b,dangerousDek:y,hasContributorImageBackground:f,hasInvertedBylineLink:L,hasMargin:G,hasStickySocialIcons:j,hasNativeShareButton:F,hideContributorTitle:V,hideContributors:le,hideDangerousDek:de,hideIssueDate:ce,hidePublishDate:pe,hideRubric:ge,socialIconsToHide:ue,hideSocialIconsOnMobile:me,hideCaption:he,imageAlignment:be,infoSliceFields:ye,isInset:fe,isMusicReview:Ce,isTextRight:ve,isTrackReview:Se,issueDate:we,issueDatePostfix:ke,issueLink:xe,isSplitScreenArtistLarge:$e,rubric:Te,rubricVariation:Ee,contributors:Ne,contributorsPosition:Le,bylineVariation:Ie,persistentAsideAlign:Be,publishDate:Ae,publishDatePosition:Pe,lede:De,ledeContentAlign:Re,musicRating:Me,shouldEnableNativeShareOnDesktop:Oe,shouldFitToViewport:He,showBookmarked:_e,shouldHeaderFitToViewport:We,showContentDivider:Ge,showContributorImage:je,showHeaderDivider:Fe,socialDescription:Ve,socialMedia:Ue,socialMediaPositionInMobile:ze,socialTitle:qe,stickySocialAnchorBottom:Ke,stickySocialAnchorTop:Ye,theme:Ze,rating:Xe,signage:Je,shouldDisplaySignage:Qe,showReviewLink:et,textAlign:tt})=>{a.useEffect(()=>{x("SplitScreenContentHeader")},[]);const nt=k({bylineVariation:Ie,theme:Ze}),{showNativeShareButton:it,pageUrl:ot}=w(F,Oe),{score:at,isBestNewMusic:rt,isBestNewReissue:st}=Me,lt=v(ye),dt=null==ye?void 0:ye.releaseYear,ct=(e=>{if(!e)return;const t=Object.assign({},e);return new Set(["photo","cartoon"]).has(e.contentType)&&!e.segmentedSources&&e.sources&&(t.segmentedSources=d(e.sources)),t})(De),pt="cnevideo"===(null==De?void 0:De.modelName),gt=!De||pt,{rating:ut,count:mt}=Xe||{},{BookmarkIcon:ht}=n(234),bt=Ce?O:R,{formatMessage:yt}=r(),ft={},Ct=re();"belowImage"===o&&(ft.captionCredit=ae(he,De)),"inLeadWrapperBelowImg"===ze&&(ft.socialMedia=oe(j,me,ue,Ue,ze));const vt=()=>{(e=>{const t=e.current&&e.current.offsetTop,n=window.pageYOffset;return Math.abs(n)>Math.abs(t)})(Ct)?te():ee()};return se(()=>{const e=s(vt,100);return window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e)}}),a.createElement(z,{className:i("content-header",{[p]:p}),contentHeaderTheme:Ze,isFullWidth:gt,isTextRight:ve,isInset:fe,imageAlignment:be,ledeContentAlign:Re,shouldFitToViewport:!He,isMusicReview:Ce,"data-testid":"SplitScreenContentHeaderWrapper",showHeaderDivider:Fe,socialMediaPositionInMobile:ze,shouldHeaderFitToViewport:We,captionPosition:o,hidePublishDate:pe,mediaContentType:(null==ct?void 0:ct.contentType)||"",hasInvertedBylineLink:L,hasMargin:G},a.createElement(bt,{shouldFitToViewport:!He},a.createElement(U,{contentAlign:g,textAlign:tt},a.createElement(ie,{signage:Je,shouldDisplaySignage:Qe}),a.createElement(ne,Object.assign({},{contributors:Ne,contributorsPosition:Le,rubric:Te,rubricVariation:Ee,hideContributors:le,hideIssueDate:ce,hidePublishDate:pe,issueDate:we,issueDatePostfix:ke,issueLink:xe,publishDate:Ae,publishDatePosition:Pe,hideRubric:ge,hasInvertedBylineLink:L,themedBylineVariation:nt})),a.createElement(D,{dangerouslySetInnerHTML:{__html:b},"data-testid":"ContentHeaderHed",isMusicReview:Ce}),Ge&&a.createElement(P,{ledeContentAlign:Re}),e&&Ce?a.createElement(E,{isMusicReview:Ce},0===e.length&&a.createElement($,{isSplitScreenArtistLarge:$e},yt(l.variousArtists)),e.map((t,n)=>a.createElement(a.Fragment,{key:n},a.createElement(Y,{key:n,href:"/".concat(t.uri)},a.createElement($,{dangerouslySetInnerHTML:{__html:t.name},isSplitScreenArtistLarge:$e})),!(n===e.length-1)&&a.createElement(T,{dangerouslySetInnerHTML:{__html:" / "},isSplitScreenArtistLarge:$e})))):!de&&y&&a.createElement(B,{dangerouslySetInnerHTML:{__html:y}}),je&&h&&a.createElement(I,Object.assign({},h,{sizes:"66px",hasContributorImageBackground:f})),Ne&&!le&&"bottom"===Le&&a.createElement(N,{contributors:Ne,bylineVariation:nt,isCompact:!1,hasInvertedBylineLink:L}),!pe&&"bottom"===Pe&&a.createElement(_,{"data-testid":"ContentHeaderPublishDate"},Ae),(Ce||Se)&&dt&&a.createElement(J,{"data-testid":"SplitScreenContentHeaderReleaseYear"},dt),_e&&a.createElement("div",{ref:Ct},a.createElement(ht,{bookmarkTrackingType:"header",link:{label:"Save story",url:"#",network:"bookmark",behavior:"bookmark"},theme:"standard",type:"thin",isUrlBookmark:!0,isBookmarkButton:!0})),!!ut&&!!mt&&a.createElement(W,{averageRatingCount:Math.round(10*ut)/10,brandSlug:t,hasBorderTop:!0,link:et&&{label:yt(l.ratingLinkLabel),onClick:e=>{e.preventDefault();const t=document.getElementById("reviews"),{top:n}=C(t);null==t||t.focus(),window.scrollTo(0,n-56)},url:"#reviews"},totalRatingCount:mt}),it?a.createElement(H,null,a.createElement(S,{shareData:{url:ot,title:qe,text:Ve}})):oe(j,me,ue,Ue,ze)),a.createElement(K,{isMusicReview:Ce},a.createElement(c,Object.assign({lede:ct,isCNEVideo:pt},ft)),Ce&&a.createElement(q,null,a.createElement(m,{rating:at,isBestNewMusic:rt,isBestNewReissue:st,isTrackReview:Se})))),"belowHeader"===o&&ae(he,De),Ne&&le&&a.createElement(N,{contributors:Ne,bylineVariation:V?"Item":Ie,isCompact:!1,isMusicReview:Ce}),lt.length>0&&a.createElement(Z,null,a.createElement(M,null,a.createElement(u,{items:lt,isMusicReview:Ce}))),!de&&Ce&&y&&a.createElement(Z,null,a.createElement(A,{dangerouslySetInnerHTML:{__html:y}})),!it&&j&&Ue&&a.createElement(X,{align:Be,attributes:{shouldFadeOnMove:!0},anchorBottom:Ke,anchorTop:Ye,fullWidthSelector:".container--full, .full-bleed-ad, .callout--feature-large"},a.createElement(Q,Object.assign({},Ue,{bookmarkTrackingType:"sticky",className:"social-icons--share"}))))};le.propTypes={artists:o.array,brandSlug:o.string,bylineVariation:o.string,captionPosition:o.oneOf(["belowHeader","belowImage"]),className:o.string,contentAlign:o.oneOf(["center","left"]),contributorImage:o.shape(p.propTypes),contributors:o.shape(h.propTypes.contributors),contributorsPosition:o.oneOf(["top","bottom"]),dangerousDek:o.string,dangerousHed:o.string.isRequired,hasContributorImageBackground:o.bool,hasInvertedBylineLink:o.bool,hasMargin:o.bool,hasNativeShareButton:o.bool,hasStickySocialIcons:o.bool,hideCaption:o.bool,hideContributors:o.bool,hideContributorTitle:o.bool,hideDangerousDek:o.bool,hideIssueDate:o.bool,hidePublishDate:o.bool,hideRubric:o.bool,hideSocialIconsOnMobile:o.bool,imageAlignment:o.oneOf(["center","top","left","right","bottom"]),infoSliceFields:o.object,isInset:o.bool,isMusicReview:o.bool,isSplitScreenArtistLarge:o.bool,issueDate:o.string,issueDatePostfix:o.string,issueLink:o.string,isTextRight:o.bool,isTrackReview:o.bool,lede:o.oneOfType([o.shape(p.propTypes)]),ledeContentAlign:o.oneOf(["left","center"]),musicRating:o.object,persistentAsideAlign:o.oneOf(["left","left-lead-asset"]),publishDate:o.string.isRequired,publishDatePosition:o.oneOf(["top","bottom"]),rating:o.shape(f.propTypes),rubric:o.shape(g.propTypes),rubricVariation:o.string,shouldDisplaySignage:o.bool,shouldEnableNativeShareOnDesktop:o.bool,shouldFitToViewport:o.bool,shouldHeaderFitToViewport:o.bool,showBookmarked:o.bool,showContentDivider:o.bool,showContributorImage:o.bool,showHeaderDivider:o.bool,showReviewLink:o.bool,signage:o.string,socialDescription:o.string,socialIconsToHide:o.array,socialMedia:o.shape(y.propTypes),socialMediaPositionInMobile:o.oneOf(["inLeadWrapperBelowImg","inTitleBlock"]),socialTitle:o.string,stickySocialAnchorBottom:b.propTypes.anchorBottom,stickySocialAnchorTop:b.propTypes.anchorTop,textAlign:o.oneOf(["left","center"]),theme:o.oneOf(["standard","inverted","special"])},le.defaultProps={brandSlug:"",captionPosition:"belowHeader",contentAlign:"center",contributorsPosition:"bottom",hasContributorImageBackground:!1,hasInvertedBylineLink:!1,hasMargin:!1,hasStickySocialIcons:!0,hideCaption:!1,hideContributorTitle:!1,hideContributors:!1,hideDangerousDek:!1,hidePublishDate:!1,hideRubric:!1,hideSocialIconsOnMobile:!1,imageAlignment:"center",isInset:!1,isTextRight:!1,issueDatePostfix:" Issue",ledeContentAlign:"left",musicRating:{score:null},persistentAsideAlign:"left",publishDatePosition:"bottom",shouldEnableNativeShareOnDesktop:!1,shouldFitToViewport:!0,shouldHeaderFitToViewport:!1,showBookmarked:!1,showContentDivider:!1,showContributorImage:!0,showHeaderDivider:!0,showReviewLink:!0,socialIconsToHide:[],socialMediaPositionInMobile:"inTitleBlock",stickySocialAnchorBottom:{selector:".page",edge:"bottom"},stickySocialAnchorTop:{selector:"[data-testid='SplitScreenContentHeaderWrapper']",edge:"bottom"},textAlign:"center",theme:"standard"},le.displayName="SplitScreenContentHeader",e.exports=le},1435:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({ratingLinkLabel:{id:"SplitScreenContentHeader.RatingLinkLabel",defaultMessage:"Read Reviews",description:"SplitScreenContentHeader component Rating Link Label"},variousArtists:{id:"SplitScreenContentHeader.VariousArtists",defaultMessage:"Various Artists",description:"SplitScreenContentHeader component various artists text"}})},1436:function(e,t,n){const i=n(0),o=n(1),a=n(92),{SplitScreenContentHeaderLede:r,SplitScreenContentHeaderLedeBlock:s}=n(246),l=({captionCredit:e,className:t,isCNEVideo:n,lede:o,socialMedia:l})=>o?n?o.scriptEmbedUrl?i.createElement(s,{"data-testid":"ContentHeaderLeadAsset",className:t},i.createElement(a,{hasMargins:!1,shouldAutoplay:!0,scriptUrl:o.scriptEmbedUrl})):null:i.createElement(s,{"data-testid":"ContentHeaderLeadAsset",className:t},i.createElement(r,Object.assign({},o)),e,l):null;l.propTypes={captionCredit:o.object,className:o.string,isCNEVideo:o.bool,lede:o.object,socialMedia:o.object},e.exports=l},1437:function(e,t,n){e.exports=n(1438)},1438:function(e,t,n){const i=n(0),{useIntl:o}=n(2),a=n(1),{BestNewMusicArrows:r}=n(1439),s=n(1440).default,l=n(76),{trackComponent:d}=n(5),{BestNewMusicText:c,Rating:p,ScoreBoxWrapper:g,ScoreCircle:u}=n(516),m=n(64),{default:h}=n(1441),b=({rating:e,isBestNewMusic:t,isBestNewReissue:n,palette:a,isTrackReview:b})=>{i.useEffect(()=>{d("ScoreBox")},[]);const{formatMessage:y}=o(),[f,C]=m(),v=b&&t;if(b&&!t)return null;const S=e<10?Number(e).toFixed(1):e,w=t||n,k=t&&n;return i.createElement(l,{palette:a},i.createElement(g,{ref:f},(h.isAccessNegotiationEnabled&&C||!h.isAccessNegotiationEnabled)&&i.createElement(i.Fragment,null,w&&i.createElement(r,{isBestBoth:k,isBest:w}),!v&&i.createElement(u,{isBest:w,isBestBoth:k},i.createElement(p,{isBest:w,isBestBoth:k},S)),w&&i.createElement(c,{isBestBoth:k,isBest:w},!v&&t&&i.createElement("div",null," ",y(s.BestNewMusic)," "),!v&&n&&i.createElement("div",null," ",y(s.BestNewReissue)),v&&i.createElement("div",null," ",y(s.BestNewTrack))))))};b.propTypes={isBestNewMusic:a.bool,isBestNewReissue:a.bool,isTrackReview:a.bool,palette:a.oneOf(["standard","inverted"]),rating:a.number},b.defaultProps={isBestNewMusic:!1,isBestNewReissue:!1,palette:"standard"},e.exports=b},1439:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.BestNewMusicArrows=void 0;const i=n(0),o=n(1),{SvgWrapper:a,SvgStyle:r}=n(516);t.BestNewMusicArrows=e=>i.createElement(a,{theme:e.theme,isBestBoth:e.isBestBoth,isBest:e.isBest},i.createElement(r,{x:"0px",y:"0px",viewBox:"0 0 80 40"},i.createElement("g",null,i.createElement("polyline",{points:"25.4,14.7 33.9,14.7 33.9,39.8 46.3,39.8 46.3,14.7 54.8,14.7 40.1,0 25.4,14.7   "}),i.createElement("polyline",{points:"50.6,40 80,40 65.2,25.4 50.6,40    "}),i.createElement("polyline",{points:"0,40 29.4,40 14.7,25.4 0,40    "})))),t.BestNewMusicArrows.propTypes={isBest:o.bool,isBestBoth:o.bool,theme:o.string}},1440:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({BestNewMusic:{id:"ScoreBox.BestNewMusic",defaultMessage:"Best New Music",description:"Best New Music"},BestNewReissue:{id:"ScoreBox.BestNewReissue",defaultMessage:"Best New Reissue",description:"Best New Reissue"},BestNewTrack:{id:"ScoreBox.BestNewTrack",defaultMessage:"Best New Track",description:"Best New Track"}})},1441:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.AwsRegion=void 0;const i=n(1375),{AWS_REGION:o,CNE_GRAPHQL_URL:a,CNE_PLAYER_DOMAIN:r,CONFIG_SERVICE_URL:s,CONFIG_SERVICE_WS_URL:l,DOMAIN_LOGIN_ENABLED:d,DISABLE_MEMORY_CACHE:c,ENABLE_CONFIG_SERVICE:p,EPI_WEB_SERVICES_URL:g,LOCAL_USERPLATFORM_URL:u,MARTECH_LIBRARY_URL:m,PRELOAD_CONFIGS:h,REDIS_HOSTNAME:b,SECRETS_BACKEND:y,SENTRY_DSN:f,SWG_ENABLED:C,VAULT_TOKEN:v}=Object({ENABLE_LIVE_RELOAD:"false",NODE_ENV:"production"}),S=a||"http://api.cnevids.com/graphql",w=Object({ENABLE_LIVE_RELOAD:"false",NODE_ENV:"production"}).APP_ENV||i.Env.staging,k=Object({ENABLE_LIVE_RELOAD:"false",NODE_ENV:"production"}).ENV||"gp-prod-na-0";function x(e){return e[w]}const $=r||x({ci:"https://player.cnevids.com",staging:"https://player-backend-qa.cnevids.com",production:"https://player.cnevids.com"}),T=k.replace("nonprod","prod"),E=s||x({ci:`https://config-service.${T}.conde.digital/graphql`,staging:`https://config-service.${T}.conde.digital/graphql`,production:`https://config-service.${T}.conde.digital/graphql`}),N=l||x({ci:`wss://config-service.${T}.conde.digital/graphql-ws`,staging:`wss://config-service.${T}.conde.digital/graphql-ws`,production:`wss://config-service.${T}.conde.digital/graphql-ws`}),L=x({production:"a61a3c7a-01d9-4175-8ab8-7171949de605",staging:"0438259f-2d71-419c-b8da-33106659c133",ci:"13f49bf8-68fb-4214-8a01-6bd6b5239540"}),I="true"===C,B="true"===d,A=g||x({ci:"https://origin-stag-services.epicurious.com/api/",staging:"https://origin-stag-services.epicurious.com/api/",production:"https://origin-services.epicurious.com/api/"}),P=x({production:"https://id.condenast.com",staging:"https://staging-id.condenast.com",ci:"https://ci-id.condenast.com"}),D=m||x({ci:"https://stag-martech.condenastdigital.com/lib/martech.js",staging:"https://stag-martech.condenastdigital.com/lib/martech.js",production:"https://martech.condenastdigital.com/lib/martech.js"}),R=x({production:{endpoint:"https://live.content.conde.digital/graphql",region:"us-east-1",authentication_type:"API_KEY",api_key:"da2-mxut7d55nfcetc3tfkdc6d4pna"},staging:{endpoint:"https://live.content-nonprod.conde.digital/graphql",region:"us-east-1",authentication_type:"API_KEY",api_key:"da2-sx7pr6xp3ndn3fgwfbvtr3ajgu"},ci:{endpoint:"",region:"us-east-1",authentication_type:"API_KEY",api_key:""}});!function(e){e.NA="us-east-1",e.EU="eu-central-1",e.AP="ap-northeast-1"}(t.AwsRegion||(t.AwsRegion={}));const M="true"===h||!(w===i.Env.staging&&"dev"===Object({ENABLE_LIVE_RELOAD:"false",NODE_ENV:"production"}).BUILD_ENV),O={accessNegotiationS3Url:"https://access-negotiation.s3.amazonaws.com",awsRegion:o,cneGraphqlUrl:S,cnePlayerBase:$,configServiceUrl:E,configServiceWsUrl:N,enableConfigService:"true"===p,env:w,epiWebServicesUrl:A,disableMemoryCache:"true"===c,formationOrgAppId:L,isAccessNegotiationEnabled:"production"!==w,isDomainSigninSwitchEnabled:B,isSwgEnabled:I,liveStoriesAppSync:R,martechLibraryUrl:D,oidcProviderConnectionUrl:P,preloadConfigs:M,redisHostname:b,secretsBackend:y||"vault",sentryDSN:f,userPlatformLocalHost:u,vaultBasePath:"secret/colab/multi-tenant/"+w,vaultToken:v};t.default=O},1442:function(e,t){const n={genre:"Genre:",label:"Label:",reviewDate:"Reviewed:"};e.exports={formatInfoSliceItems:e=>{if(!e)return[];const t=[];return Object.keys(e).forEach(i=>{e[i]&&e[i].length&&n[i]&&t.push({key:n[i],value:e[i]})}),t}}},1448:function(e,t,n){var i=n(1457),o=n(1545);e.exports=function(e,t,n){return void 0===n&&(n=t,t=void 0),void 0!==n&&(n=(n=o(n))==n?n:0),void 0!==t&&(t=(t=o(t))==t?t:0),i(o(e),t,n)}},1456:function(e,t,n){const{asConfiguredComponent:i}=n(9),{asThemedComponent:o}=n(34),a=n(1413);e.exports=o(i(a,"ContentHeader"))},1457:function(e,t){e.exports=function(e,t,n){return e==e&&(void 0!==n&&(e=e<=n?e:n),void 0!==t&&(e=e>=t?e:t)),e}},150:function(e,t,n){const i=n(3).default,{BaseText:o}=n(10),{calculateSpacing:a,getColorStyles:r}=n(4),{BREAKPOINTS:s}=n(6),l=i.div.withConfig({displayName:"ToggleChipListWrapper"})`
  ${({hasToggleGridColor:e,theme:t})=>e&&`\n  ${r(t,"background-color","colors.background.light")};\n  border-bottom:${a(4)} solid ;\n  ${r(t,"border-color","colors.background.light")};\n  `}
  display: flex;
  flex-direction: column;
  ${({contentAlign:e})=>"left"===e?"align-items: flex-start":"center"===e?"align-items: center":"right"===e&&"align-items: flex-end"}
`,d=i(o).withConfig({displayName:"LabelText"})`
  margin: 0 0 ${a(1)};

  ${({hasIncreasedBottomMargin:e})=>e&&` \n    margin: 0 0 ${a(2)};\n  `}

  ${({hasLargeLabel:e})=>e&&" \n    font-size: 1rem;\n    letter-spacing: 1px;\n  "}

  ${({fullPageTheme:e,theme:t})=>"inverted"===e?r(t,"color","colors.interactive.base.white"):""}
`;d.defaultProps={as:"div",colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.utility.label"};const c=i.div.withConfig({displayName:"ListWrapper"})`
  display: flex;
  flex-direction: row;
  padding: 0 ${a(3)};
  width: 100%;
  gap: ${a(1.5)};

  ${({hasNoHorizontalScroll:e})=>e&&" &::-webkit-scrollbar \n    {\n      display: none;\n    }"}

  ${({layout:e})=>"wrap"===e?"flex-wrap: wrap;":"overflow-x: auto;"}
  
  ${({contentAlign:e,layout:t})=>{if("nowrap"===t)return"";switch(e){case"left":return"justify-content: flex-start;";case"center":return"justify-content: center;";case"right":return"justify-content: flex-end;";default:return""}}}
  
  ${({hasToggleGridColor:e})=>e&&`--grid-margin: ${a(3)};`}
`,p=i.div.withConfig({displayName:"ListItemWrapper"})`
  ${({contentAlign:e,layout:t,hasSpacing:n})=>{if("wrap"===t)return"";let i=e;switch(n&&(i="centerWithPadding"),i){case"center":return"\n        &:first-child {\n          margin-left: auto;\n        }\n\n        &:last-child {\n          margin-right: auto;\n        }\n      ";case"right":return"\n        &:first-child {\n          margin-left: auto;\n        }\n      ";case"centerWithPadding":return`\n        @media (min-width: ${s.md}) {\n          &:first-child {\n            margin-left: auto;\n          }\n\n          &:last-child {\n            margin-right: auto;\n          }\n        }\n\n        @media (min-width: ${s.sm}) and (max-width: ${s.md}) {\n          &:first-child {\n            margin-left: 1.5rem;\n          }\n  \n          &:last-child {\n            margin-right: 1.5rem;\n          }\n        }          \n        `;default:return""}}}
`,g=i(o).withConfig({displayName:"HelperText"})`
  margin: ${a(1)} 0 0;
`;g.defaultProps={as:"div",colorToken:"colors.interactive.base.dark",typeIdentity:"typography.definitions.utility.assistive-text"},e.exports={ToggleChipListWrapper:l,LabelText:d,ListWrapper:c,ListItemWrapper:p,HelperText:g}},151:function(e,t,n){e.exports=n(155)},1532:function(e,t,n){const{default:i,createGlobalStyle:o,css:a}=n(3),{BREAKPOINTS:r}=n(6),{calculateSpacing:s,getColorStyles:l,getTypographyStyles:d,minScreen:c,minMaxScreen:p,getColorToken:g,getLinkStyles:u}=n(4),{withRecircContextProvider:m}=n(158),h=m(n(81)),{getPattern:b}=n(441),y=n(14),{ConfiguredDisclaimer:f}=n(95),{BodyWrapper:C}=n(177),v=n(483),{SectionTitleHed:S}=n(78),{LinkStackContent:w}=n(484),{RecircMostPopularWrapper:k,RecircMostPopularHeading:x}=n(477),{StickyBoxWrapper:$,StickyBoxPrimary:T}=n(461),{IframeEmbedWrapper:E}=n(253),{ResponsiveCartoonWrapper:N}=n(238),{GalleryEmbedHr:L}=n(162),{AssetEmbedAssetContainer:I}=n(80),{GridItem:B,GridWrapper:A}=n(27),P=n(140),{SocialIconsListItem:D}=n(25),{ResponsiveCartoonCaption:R}=n(238),M=a`
  ${({theme:e})=>b(e,"page-background")}
  .grid-layout__content {
    ${c(r.md)} {
      grid-column: 3 / span 8;
    }

    ${c(r.lg)} {
      grid-column: 2 / span 6;
    }

    ${p(r.sm,r.md)} {
      grid-column: 1 / -1;
    }
  }

  .grid-layout--adrail.narrow {
    .container--body-inner {
      ${c(r.md)} {
        grid-column: 1 / -1;
      }
    }

    ${k} {
      &:first-child {
        margin-top: 0;

        ${x} {
          margin-top: 0;
        }
      }
    }
  }

  .container--body {
    grid-gap: 20px;
  }

  inline-embed[name='align-right'] {
    text-align: right;
  }

  inline-embed[name='align-center'] {
    text-align: center;
  }
`,O=i(h).withConfig({displayName:"ArticlePageBase"})`
  &&& {
    ${M}
    ${({shouldHideBaseTopPadding:e})=>e&&"padding-top : 0;"}
    ${({hideNav:e,shouldPrioritizeSeriesPagination:t,hasContentHeaderLogo:n})=>!t&&n&&(e=>e?"\n    header.site-navigation {\n      margin-bottom: -7rem;\n      transform: translateY(-150%);\n      transition: all 1000ms ease;\n    }\n    ":"\n    header.site-navigation {\n      margin-bottom: -7rem;\n      transition: all 500ms ease;\n    }\n")(e)}
  }
`,H=o`
    .channel--body {
      ${M}
    }
    
    .body__container {
      grid-column: 1/ -1;
    
      ${c(r.md)} {
        grid-column: 3 / span 8;
      }
    }
  
    /* 1. required to enforce proper alignment when text may be less than a full line
       2. remove extra top spacing added by default paragraph margins */
      .article__body {
        margin-bottom: ${s(2)};
        width: 100%; /* 1 */
  
        p:first-child:not(.callout--group-item) {
          margin-top: 0; /* 2 */
        }
  
        .small {
          font-variant: small-caps;
          text-transform: lowercase;
          font-style: normal;
        }
  
        .underline {
          text-decoration: underline;
          font-style: normal;
        }

        ${R} .underline {
          font-style: inherit;
        }
      }
  
      .article__body > .body__inner-container > {
        ${E}, .cne-video-embed {
            &:first-child {
              margin-top: 0;
            }
          }
  
          inline-embed:first-child ${E} {
            margin-top: 0;
          }
      }

      .article__body--grid-margins {
        grid-column: 1 / -1;
      }

      /**
       1. have ad span more columns from the right panel
       to have a larger right margin
       2. have it span 3 which is intended in a 12 column grid
       */
       .grid-layout__aside {
         display: none;
     
         ${c(r.lg)} {
           display: block;
           min-width: 300px;
     
           ${$} {
             top: 90px;
           }
         }
     
         ${k} {
           &:first-child {
             margin-top: 0;
     
             ${x} {
               margin-top: 0;
             }
           }
         }
       }

  `,_=i("div").withConfig({displayName:"PaywallInlineBarrierWithWrapperGrid"})`
  ${({adRail:e})=>!e&&`\n    > ${B} {\n      grid-column: 1 / -1;\n    }`}
`,W=i("div").withConfig({displayName:"ArticlePageLedeBackground"})`
  ${({theme:e})=>b(e,"lede-background")}
`,G=i("div").withConfig({displayName:"ArticlePageContentBackGround"})`
  ${({theme:e})=>b(e,"lede-background")}
  padding-top: ${s(2)};

  @media (min-width: 1208px) {
    padding-top: ${s(4)};
  }

  ${({togglePaddingTop:e})=>"large"===e&&`padding-top: ${s(4)};\n       ${c(r.md)}{ \n        padding-top: ${s(6)};\n       }\n      `}

  ${({togglePaddingTop:e})=>"xlarge"===e&&`${c(r.lg)} {  padding-top: ${s(8)}; }`}
  
    ${({isMobileTruncated:e})=>e&&`\n          position: relative;\n          height: 890px;\n          overflow: hidden;\n  \n          &::before {\n            display: block;\n            position: absolute;\n            bottom: 0;\n            z-index: 1;\n            background: linear-gradient(\n              0deg,\n              rgba(255, 255, 255, 1) 20%,\n              rgba(255, 255, 255, 0) 100%\n            );\n            width: 100%;\n            height: 192px;\n            content: '';\n          }\n  \n          ${c(r.md)} {\n            height: auto;\n            overflow: visible;\n  \n            &::before {\n              display: none;\n            }\n          }\n        `}

  ${({cartoonVariation:e})=>"card"===e&&a`
      ${N}::before, ${N}::after {
        border: none;
      }

      ${N} {
        padding: ${s(2)};
        ${l("background-color","colors.background.brand")};

        ${c(r.lg)} {
          ${D} a {
            width: ${s(5)};
          }
        }
      }
    `}
`,j=i("div").withConfig({displayName:"ArticlePageChunks"})`
  .grid:last-child {
    .body__container > .body__inner-container > *:last-child {
      ${L}:last-child {
        display: none;
      }
    }
  }

  ${({horizontalRuleStyle:e})=>"thin"===e&&"\n        .body__container {\n          .callout--has-top-border {\n            border-top-width: 1px;\n          }\n\n          hr {\n            height: 1px;\n          }\n        }\n      "}

  ${({hasTopSpacing:e})=>!e&&`\n        .inset-embedded-lede {\n          @media (min-width: 0px) and (max-width: calc(${r.md} - 1px)) {\n            ${I} {\n              transform: translateX(-50%);  /* 1 */\n              margin-left: 50%;\n              width: 100vw;\n            }\n          }\n        }\n\n        ${c(r.md)} {\n          .body__container {\n            p:first-of-type {\n              margin-top: 0;\n            }\n\n            .inset-embedded-lede {\n              margin-top: 0;\n            }\n          }\n        }\n    `}

  @media print {
    ${A} {
      display: block;
    }

    ${A} > p {
      font-size: 17px;
    }
  }
`,F=i(y.Utility).withConfig({displayName:"ArticlePageBodyMobileTruncatedBtn"})`
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 2;
  margin-left: -100px;
  width: 200px;

  ${c(r.md)} {
    display: none;
  }
`,V=i(f).withConfig({displayName:"ArticlePageDisclaimer"})`
  ${d("typography.definitions.discovery.subhed-section-collection")}
  p {
    ${d("typography.definitions.globalEditorial.context-secondary")};
  }
  ${({theme:e})=>l(e,"color","colors.consumption.body.standard.body")};
  ${c(r.md)} {
    .grid-layout--adrail & {
      grid-column: 1 / -1;
    }
  }
`,U=i("div").withConfig({displayName:"ArticlePageChunksContent"})`
  ${({isNarrowContentWell:e})=>e&&`\n        .grid > *:first-child,\n        .body__container {\n          grid-column: 1 / -1;\n\n          ${c(r.lg)} {\n            grid-column: 4 / span 6;\n          }\n        }\n\n        ${N} {\n          .grid--item {\n            grid-column: 1 / -1;\n          }\n        }\n      `}

  ${({shouldBlurText:e})=>{e&&a`
        .grid:first-of-type .body__container p.has-dropcap::first-letter {
          color: transparent;
        }
        ${C} {
          * {
            text-shadow: 0 0 20px
              rgba(
                ${g("colors.consumption.body.standard.body")},
                0.5
              );
            color: transparent;
          }

          a:not(.button) {
            ${({theme:e})=>u(e,"colors.consumption.body.standard.link","colors.consumption.body.standard.link-hover")};
            text-shadow: 0 0 20px
              rgba(
                ${g("colors.consumption.body.standard.link")},
                0.5
              );
          }
        }
      `}}
`,z=i("article").withConfig({displayName:"ArticlePageMainContent"})`
  ${({shouldBlurText:e})=>e&&"\n        .grid {\n          .body__container {\n            p.has-dropcap,\n            p.has-dropcap__lead-standard-heading {\n              &::first-letter {\n                color: inherit;\n              }\n            }\n          }\n        }\n      "}
`,q=i(P).withConfig({displayName:"ArticlePageSplitAdRail"})`
  ${$},
  ${$} > ${T} {
    height: 100%;
  }

  > aside > ${$} {
    position: static;
  }
`,K=i("div").withConfig({displayName:"ArticlePageSplitAdRailContent"})`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${$} {
    margin-bottom: 0;
  }

  > div {
    flex: 1;
  }
`,Y=i("div").withConfig({displayName:"ArticlePageSplitAdRailTop"})``,Z=i("div").withConfig({displayName:"ArticlePageSplitAdRailMiddle"})`
  margin-top: 40px;
`,X=i("div").withConfig({displayName:"ArticlePageSplitAdRailBottom"})`
  margin-top: 40px;
`,J=i("div").withConfig({displayName:"ArticlePageBodyGridContainer"})`
  width: 100%;
`,Q=i.div.withConfig({displayName:"ArticlePageChunksGrid"})`
  ${({adRail:e})=>!e&&`\n     > ${B} {\n      grid-column: 1/ -1;\n      ${c(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
  > ${B} {
    margin-bottom: ${s(2)};
  }
`,ee=i.div.withConfig({displayName:"ArticlePageContentFooterGrid"})`
  ${B} {
    grid-column: 1 / -1;
    ${c(r.md)} {
      grid-column: 3 / span 8;
    }
    ${({isNarrow:e})=>e&&`\n         ${c(r.md)} {\n            grid-column: 4 / span 6;\n          }\n         `}
  }
`,te=i.div.withConfig({displayName:"ArticlePageDisclaimerGrid"})`
  ${({adRail:e})=>!e&&`\n    > ${B} {\n      grid-column: 1/ -1;\n      ${c(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
`,ne=i.div.withConfig({displayName:"ContentWrapperGrid"})`
  ${({isadRail:e})=>!e&&`\n    > ${B} {\n      grid-column: 1/ -1;\n      ${c(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
`,ie=i(v).withConfig({displayName:"LinkStackArticlePage"})`
  margin: 48px 0;
  padding-bottom: 0;

  ${S} {
    margin: 0;
  }

  ${w} > ul {
    margin-left: 0;
    padding-left: 0;
  }
`;e.exports={ArticlePageBase:O,ArticlePageGlobalStyle:H,ArticlePageLedeBackground:W,ArticlePageContentBackGround:G,ArticlePageChunks:j,ArticlePageBodyMobileTruncatedBtn:F,ArticlePageChunksContent:U,ArticlePageMainContent:z,ArticlePageDisclaimer:V,ArticlePageSplitAdRail:q,ArticlePageSplitAdRailContent:K,ArticlePageSplitAdRailTop:Y,ArticlePageSplitAdRailMiddle:Z,ArticlePageSplitAdRailBottom:X,ArticlePageBodyGridContainer:J,ArticlePageChunksGrid:Q,ArticlePageContentFooterGrid:ee,ArticlePageDisclaimerGrid:te,ContentWrapperGrid:ne,LinkStackArticlePage:ie,PaywallInlineBarrierWithWrapperGrid:_}},1541:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(1550);e.exports=i(o,"BreadcrumbTrail")},155:function(e,t,n){const{asVariation:i}=n(13),o=n(156);o.ContentCenterNoBackground=i(o,"ContentCenterNoBackground",{contentAlign:"center",hasBackground:!1}),o.ContentRightNoBackground=i(o,"ContentRightNoBackground",{contentAlign:"right",hasBackground:!1}),o.ContentLeftNoBackground=i(o,"ContentLeftNoBackground",{contentAlign:"left",hasBackground:!1}),e.exports=o},1550:function(e,t,n){const i=n(1),o=n(0),a=n(76),r=n(19),{getSeparatorIconComponent:s}=n(1551),{BreadcrumbTrailWrapper:l,BreadcrumbTrailScrollContainer:d,BreadcrumbTrailItem:c}=n(1554),{trackComponent:p}=n(5),g=({hierarchy:e,shouldRemoveBackgroundColor:t,theme:n,shouldUseContentHeaderColorForLink:i,separatorIcon:g})=>(o.useEffect(()=>{p("BreadcrumbTrail")},[]),o.createElement(a,{palette:n},o.createElement(l,{"data-testid":"BreadcrumbTrail",shouldRemoveBackgroundColor:t},e&&e.length>0&&o.createElement(r.WithMargins,null,o.createElement(d,null,e.map((e,t)=>{const{name:n,slug:a}=e||{};return o.createElement(c,{key:t,shouldUseContentHeaderColorForLink:i},a?o.createElement("a",{className:"breadCrumbLink",href:a},n):o.createElement("span",null,n),s(g))}))))));g.displayName="BreadcrumbTrail",g.defaultProps={separatorIcon:{name:"Chevron",type:"standard"},shouldRemoveBackgroundColor:!1,theme:"standard"},g.propTypes={hierarchy:i.array.isRequired,separatorIcon:i.shape({name:i.string,type:i.oneOf(["standard","thin","thinner"])}),shouldRemoveBackgroundColor:i.bool,shouldUseContentHeaderColorForLink:i.bool,theme:i.string},e.exports=g},1551:function(e,t,n){const i=n(0),{getIconComponent:o}=n(1552);e.exports={getSeparatorIconComponent:e=>{const{name:t,type:n}=e,a=o(t,n)||o("Chevron","standard");return i.createElement(a,Object.assign({},{width:"1rem",height:"1rem"}))}}},1552:function(e,t,n){const i={standard:n(142),thin:n(470),thinner:n(1553)};e.exports={getIconComponent:(e,t="standard")=>{if(!e)return null;const n=i[t][e];return n||null}}},1553:function(e,t,n){e.exports={Bookmark:n(152),BookmarkActivated:n(98),Email:n(464),Facebook:n(465),Twitter:n(467),Print:n(468),Shopping:n(466)}},1554:function(e,t,n){const{default:i}=n(3),{BaseText:o}=n(10),{calculateSpacing:a,getLinkStyles:r,getColorStyles:s}=n(4),{BREAKPOINTS:l}=n(6),{isInverted:d}=n(28),c=i.div.withConfig({displayName:"BreadcrumbTrailWrapper"})`
  ${({theme:e,shouldRemoveBackgroundColor:t})=>{const n=d(e)?"colors.background.black":"colors.background.light";return t?"background-color: transparent;":s(e,"background-color",n)+";"}};

  padding-top: ${a(2.4)};
  padding-bottom: ${a(2.4)};
  width: 100%;

  @media (max-width: ${l.md}) {
    overflow-y: hidden;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`,p=i.div.withConfig({displayName:"BreadcrumbTrailScrollContainer"})`
  display: flex;
  width: max-content;
`,g=i(o).withConfig({displayName:"BreadcrumbTrailItem"})`
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  ${({theme:e})=>d(e)&&`\n      ${s(e,"color","colors.consumption.lead.inverted.link")};`}

  a:active,
  a:link {
    text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }

  .icon {
    margin: 0 ${a(.2)};

    path {
      ${({theme:e})=>d(e)&&`\n          ${s(e,"fill","colors.consumption.lead.inverted.link")};\n        `}
    }
  }

  &:last-of-type {
    a {
      ${({theme:e,shouldUseContentHeaderColorForLink:t})=>{const n=d(e)?r(e,"colors.consumption.lead.inverted.link",null):r(e,"colors.discovery.lead.secondary.link",null);return t?r(e,"colors.consumption.lead.standard.context-signature",null):n}}

      &:active,
      &:link {
        text-decoration: none;
      }

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }

    span {
      ${({theme:e})=>s(e,"color","colors.discovery.lead.secondary.link")};
    }

    .icon {
      display: none;
    }
  }
`;g.defaultProps={typeIdentity:"typography.definitions.globalEditorial.tags"},e.exports={BreadcrumbTrailWrapper:c,BreadcrumbTrailScrollContainer:p,BreadcrumbTrailItem:g}},1555:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({bylineBrandXAdvertiser:{id:"SponsoredContentHeader.BylineBrandXAdvertiser",defaultMessage:"{brandName} X",description:"Byline text when it's a brand and an advertiser"},bylineBrandedContent:{id:"SponsoredContentHeader.BylineBrandedContent",defaultMessage:"Branded Content By",description:"Byline text for branded content"},bylineCreated:{id:"SponsoredContentHeader.BylineCreated",defaultMessage:"Created By {brandName} For",description:"Byline text for created by brand"},bylinePaidPost:{id:"SponsoredContentHeader.BylinePaidPost",defaultMessage:"PAID POST",description:"Byline text for a paid post"},bylineProduced:{id:"SponsoredContentHeader.BylineProduced",defaultMessage:"Produced By",description:"Byline text for produced by"},bylineProducedByAdvertiser:{id:"SponsoredContentHeader.BylineProducedByAdvertiser",defaultMessage:"Produced By",description:"Byline text for produced by advertiser"},bylineProducedByBrand:{id:"SponsoredContentHeader.BylineProducedByBrand",defaultMessage:"Produced By {brandName} With",description:"Byline text for produced by brand"},bylineSponsored:{id:"SponsoredContentHeader.BylineSponsored",defaultMessage:"Sponsored content",description:"Byline text for sponsored content"},bylineSponsoredContent:{id:"SponsoredContentHeader.BylineSponsoredContent",defaultMessage:"Sponsored Content By",description:"Byline text for sponsored content with a sponsor name"},bylineInCollaboration:{id:"SponsoredContentHeader.BylineInCollaboration",defaultMessage:"In Collaboration With",description:"Byline text for in collaboration with"},bylineSponsoredBy:{id:"SponsoredContentHeader.BylineSponsoredBy",defaultMessage:"Sponsored By",description:"Byline text for sponsored by"},bylineInPartnership:{id:"SponsoredContentHeader.BylineInPartnership",defaultMessage:"In Partnership With",description:"Byline text for in partnership with"},bylineAdvertisementFeatureWith:{id:"SponsoredContentHeader.BylineAdvertisementFeatureWith",defaultMessage:"Advertisement Feature With",description:"Byline text for advertisement feature with"},bylineOriginalContentBy:{id:"SponsoredContentHeader.BylineOriginalContentBy",defaultMessage:"Original Content By",description:"Byline text for Original Content By"},sponsoredLinkCTA:{id:"SponsoredContentHeader.SponsoredLinkCTA",defaultMessage:"Click to go to {sponsorName}'s website",description:"Call to action for sponsored link"}})},1556:function(e,t,n){e.exports=n(1634)},1557:function(e,t,n){const{default:i}=n(3),{calculateSpacing:o,minScreen:a,minMaxScreen:r,getColorToken:s}=n(4),{CarouselControlButton:l}=n(46),d=n(19),{BREAKPOINTS:c}=n(6),p=i(d.EvenFour).withConfig({displayName:"FilterableSummaryListGrid"})`
  &.grid-even.grid-items-4 {
    ${a(c.md)} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &.grid-even {
    ${r(0,c.md)} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding-right: ${o(3)};
      padding-left: ${o(3)};
    }
    padding-right: ${o(4)};
    padding-left: ${o(4)};
  }

  &.grid {
    row-gap: ${o(6)};
  }
`,g=i(d.DynamicGridItemLayout).withConfig({displayName:"FilterableSummaryListDynamicGridItemLayout"})`
  &.grid-even.grid-items-4 {
    ${a(c.md)} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &.grid-even {
    ${r(0,c.md)} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding-right: ${o(3)};
      padding-left: ${o(3)};
    }
    padding-right: ${o(4)};
    padding-left: ${o(4)};
  }

  &.grid {
    row-gap: ${o(6)};
    ${({shouldDisplayDenseGrid:e=!0})=>!e&&"grid-auto-flow:row;"}
  }
`,u=i.section.withConfig({displayName:"FilterableSummaryListWrapper"})`
  ${({theme:e,hasBorderBottom:t})=>t&&`border-bottom: 1px solid ${s(e,"colors.consumption.lead.standard.divider")};`}

  ${({hasPadding:e,hasToggleGridColor:t})=>e&&!t?`padding: ${o(4)} 0 ${o(4)};`:""}
`,m=i.div.withConfig({displayName:"TitleWrapper"})`
  ${({hasTitleMarginTop:e})=>{const t=o(4);return`margin: ${e?t:"0"} 0 ${t} 0;`}}

  ${({hasPadding:e})=>e&&`padding-left: ${o(3)};\n    padding-right:  ${o(3)};\n   `}
  
  ${({hasTitleNoMargin:e})=>e&&"margin: 0;"}
`,h=i.div.withConfig({displayName:"ChipWrapper"})`
  ${({hasToggleGridColor:e})=>e?`padding-bottom: ${o(4)};`:`margin: ${o(4)} 0 0 0;`}
`,b=i.div.withConfig({displayName:"CarouselWrapper"})`
  ${l} {
    margin-top: 1rem;

    &:disabled {
      display: none;
    }
  }
`,y=i.div.withConfig({displayName:"FilterableSummaryListFullBleed"})``;e.exports={FilterableSummaryListFullBleed:y,FilterableSummaryListWrapper:u,TitleWrapper:m,ChipWrapper:h,CarouselWrapper:b,FilterableSummaryListGrid:p,FilterableSummaryListDynamicGridItemLayout:g}},156:function(e,t,n){const i=n(1),o=n(8),a=n(0),r=n(11),{trackComponent:s}=n(5),{UtilityLedeHeader:l,UtilityLedeWrapper:d,UtilityLedeHedText:c,UtilityLedeDekText:p,UtilityLedeImage:g}=n(141),u=({ariaLive:e,className:t,dangerousDek:n,dangerousHed:i,image:r,shouldUseAlternativeStyle:u,hasInverted:m,variations:h})=>{a.useEffect(()=>{s("UtilityLede",h)},[]);const b=r&&Object.keys(r).length>0;return a.createElement(l,{className:o("utility-lede",t),"aria-live":e,"aria-label":"UtilityPageHeader",contentAlign:h.contentAlign,hasBackground:h.hasBackground,hasImage:b,alternativeStyle:u},r&&a.createElement(g,Object.assign({hasImage:b},r)),a.createElement(d,{alternativeStyle:u},a.createElement(c,{"data-testid":"UtilityLedeHedText",hasImage:b,dangerouslySetInnerHTML:{__html:i},hasInverted:m}),n&&a.createElement(p,{"data-testid":"UtilityLedeDekText",hasImage:b,dangerouslySetInnerHTML:{__html:n}})))};u.propTypes={ariaLive:i.string,className:i.string,dangerousDek:i.string,dangerousHed:i.string.isRequired,hasInverted:i.bool,image:i.shape(r.propTypes),shouldUseAlternativeStyle:i.bool,variations:i.shape({contentAlign:i.oneOf(["center","left","right"]),hasBackground:i.bool})},u.defaultProps={shouldUseAlternativeStyle:!1,variations:{contentAlign:"center",hasBackground:!0}},e.exports=u},1585:function(e,t,n){e.exports=n(1586)},1586:function(e,t,n){const i=n(1),o=n(0),{connect:a}=n(21),{useIntl:r}=n(2),s=n(1587).default,l=n(26).default,d=n(32),c=n(11),{googleAnalytics:p}=n(12),{asConfiguredComponent:g}=n(9),{doCloseModal:u}=n(153),{trackComponent:m}=n(5),{SignInModalBaseWrapper:h,SignInModalCloseButton:b,SignInModalButtons:y,SignInModalDek:f,SignInModalHed:C,SignInModalEmail:v,SignInModalSignInSection:S,SignInModalSpotIllustration:w,SignInModalSignInLink:k,SignInModalHedSpanTag:x}=n(1588),$=({analyticsType:e,authSource:t,brandIdentityAssets:n,className:i,closeButtonCallback:a,dangerousDek:g,dangerousHed:$,dangerousHedSpanTag:T,hasLargeMargins:E,hasRoundedCornersButtons:N,isVisible:L,redirectURL:I,source:B,type:A})=>{o.useEffect(()=>{m("SignInModal")},[]);const P=t=>p.emitGoogleTrackingEvent(t,{signInModalType:e});L&&P("signin-modal-impression");let D=`${l.oidcAuth}?redirectURL=${encodeURIComponent(I)}&skipAccountLink=true&authSource=${t}`;B&&(D=`${D}&source=${B}`);const R=n.signInModalAsset[A]||n.signInModalAsset.default,{formatMessage:M}=r();return o.createElement(h,{className:i,hasLargeMargins:E,closeTimeoutMS:400,isOpen:L},o.createElement(b,{isIconButton:!0,ariaLabel:M(s.closeButtonAriaLabel),label:M(s.closeButtonLabel),onClickHandler:()=>{u(),P("signin-modal-close"),a&&a()},role:"button",ButtonIcon:d}),o.createElement(C,null,$||M(s.hed),o.createElement(x,null,T||M(s.hedSpanTag))),o.createElement(w,null,o.createElement(c,Object.assign({},R))),o.createElement(f,{dangerouslySetInnerHTML:{__html:g}}),o.createElement(y,{hasRoundedCornersButtons:N},o.createElement(v,{label:M(s.oidcSignUpButtonLabel),href:D,inputKind:"link",rel:"link",iconPosition:"before",onClickHandler:()=>P("signin-modal-oidc-sign-in-click"),"data-testid":"SignInModalEmail"})),o.createElement(S,null,M(s.oidcSignInText)," ",o.createElement(k,{href:D,onClick:()=>P("signin-modal-oidc-sign-in-click")},M(s.oidcSignInLinkText)),"voting"===A&&o.createElement("div",null,"  »")))};$.displayName="SignInModal",$.defaultProps={authSource:"sign-in-modal",hasLargeMargins:!1,redirectURL:"/",type:"default"},$.propTypes={analyticsType:i.string.isRequired,authSource:i.string,brandIdentityAssets:i.shape({signInModalAsset:i.shape({default:i.object,crosswords:i.object,voting:i.object})}).isRequired,className:i.string,closeButtonCallback:i.func,dangerousDek:i.string,dangerousHed:i.string,dangerousHedSpanTag:i.string,hasLargeMargins:i.bool,hasRoundedCornersButtons:i.bool,isVisible:i.bool,redirectURL:i.string,source:i.string,type:i.oneOf(["default","crosswords","voting"])};const T=g($,"SignInModal");e.exports=a(e=>{const{signInModalConfig:t,brandIdentityAssets:n}=e;return Object.assign({brandIdentityAssets:n},t)})(T)},1587:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({oidcSignUpButtonLabel:{id:"SignInModal.OidcSignUpButtonLabel",defaultMessage:"Create account",description:"SignInModal component OIDC SignUp button label"},closeButtonLabel:{id:"SignInModal.CloseButtonLabel",defaultMessage:"Close Sign In Modal",description:"SignInModal component close button label"},closeButtonAriaLabel:{id:"SignInModal.CloseButtonAriaLabel",defaultMessage:"Close Sign In Modal",description:"SignInModal component close button aria label"},hed:{id:"SignInModal.Hed",defaultMessage:"Save stories ",description:"SignInModal component hed text",isConfigurable:!0},hedSpanTag:{id:"SignInModal.HedSpanTag",defaultMessage:"with an account",description:"SignInModal component hed spanTag text",isConfigurable:!0},oidcSignInText:{id:"SignInModal.OidcSignInText",defaultMessage:"Already have an account?",description:"SignInModal component OIDC SignIn Text"},oidcSignInLinkText:{id:"SignInModal.OidcSignInLinkText",defaultMessage:"Sign in",description:"SignInModal component OIDC SignIn Link Text"}})},1588:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};const o=n(0),a=n(168),r=n(1),{default:s,css:l}=n(3),{BaseText:d,BaseLink:c}=n(10),{calculateSpacing:p}=n(4),{BREAKPOINTS:g,ZINDEX_MAP:u}=n(6),m=n(14),{getColorToken:h,getTypographyStyles:b}=n(4),{ResponsiveImagePicture:y}=n(24),{ButtonWrapper:f}=n(33),C=s(d).withConfig({displayName:"SignInModalHed"})`
  text-align: center;
`;C.defaultProps={as:"div",colorToken:"colors.discover.body.white.heading",topSpacing:1,typeIdentity:"typography.definitions.consumptionEditorial.display-small"};const v=s.span.withConfig({displayName:"SignInModalHedSpanTag"})`
  display: block;
`,S=s.p.withConfig({displayName:"SignInModalDek"})`
  ${b("typography.definitions.consumptionEditorial.body-core")}
  text-align: center;
  color: ${h("colors.discover.body.white.description")};
  @media (max-width: ${g.md}) {
    margin-bottom: ${p(3)};
  }
`,w=s(d).withConfig({displayName:"SignInModalSpotIllustration"})`
  margin: ${p(1.5)} auto;
  text-align: center;

  ${y} {
    width: 200px;
    height: 170px;
  }
`;w.defaultProps={as:"div",typeIdentity:"typography.definitions.consumptionEditorial.body-core"};const k=s(m.Primary).withConfig({displayName:"SignInModalButtonPrimary"})`
  margin-bottom: ${p(1)};
  width: 100%;
`,x=s(m.Primary).withConfig({displayName:"SignInModalButtonPrimaryOutlined"})`
  width: 100%;
`,$=s(m.Utility).withConfig({displayName:"SignInModalCloseButton"})`
  position: absolute;
  top: ${p(1)};
  right: ${p(1)};
  padding: 0;
  fill: ${h("colors.discovery.body.light.context-tertiary")};

  &,
  &:focus,
  &:hover {
    border: 0;
    background-color: transparent;
  }
`,T=s(m.Utility).withConfig({displayName:"SignInModalEmail"})`
  margin-top: 0;
  padding: 0;
`,E=s.div.withConfig({displayName:"SignInModalButtons"})`
  display: flex;
  justify-content: center;
  margin: auto;
  padding-bottom: ${p(2)};
  width: 100%;

  ${T} {
    padding: 0;
    width: 100%;
  }

  ${({hasRoundedCornersButtons:e})=>e&&`\n    ${f} {\n      border-radius: 4px;\n    }\n  `}
`,N=l`
  &&& {
    padding: ${p(8)} ${p(5)};
    min-height: ${p(62)};
  }
  ${w} {
    margin: ${p(1.5)} auto;

    ${y} {
      width: 175px;
      height: 175px;
    }
  }

  ${S} {
    margin-bottom: ${p(2)};
  }

  ${E} {
    margin-bottom: ${p(4)};

    @media (max-width: ${g.md}) {
      padding-bottom: 0;
    }
  }
`;function L(e){var{className:t}=e,n=i(e,["className"]);const r=t+"__content",s=t+"__overlay";return o.createElement(a,Object.assign({portalClassName:t,className:r,overlayClassName:s},n))}L.propTypes={className:r.string};const I=s(L).withConfig({displayName:"SignInModalBaseWrapper"})`
  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${u.interstitialLayer};

    background-color: rgba(
      ${h("colors.background.black",{rgbOnly:!0})},
      0
    );

    &.ReactModal__Overlay--after-open {
      transition: background-color 750ms;
      opacity: 1;
      background-color: rgba(
        ${h("colors.background.black",{rgbOnly:!0})},
        0.4
      );
    }

    &.ReactModal__Overlay--after-close {
      transition: background-color 750ms;
      background-color: rgba(
        ${h("colors.background.black",{rgbOnly:!0})},
        0
      );
    }
  }

  &__content {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${h("colors.background.white")};
    padding: ${p(5)};
    width: ${p(60)};
    max-height: calc(100% - ${p(1,"px")});
    overflow-y: auto;

    @media (max-width: ${g.md}) {
      transform: translateY(-50%)
        translateX(calc(-50% - ${p(2,"px")}));

      margin: 0 ${p(2,"px")};
      padding: ${p(4)} ${p(5)}
        ${p(4)} ${p(5)};
      width: auto;
      min-width: ${p(38)};
      max-width: ${p(60)};
    }

    ${k}
    ${x}
    ${({hasLargeMargins:e})=>!0===e&&N}
  }
`,B=s(d).withConfig({displayName:"SignInModalSignInSection"})`
  display: flex;
  justify-content: center;
  width: 100%;
`;B.defaultProps={as:"div",colorToken:"colors.discovery.body.light.context-tertiary",typeIdentity:"typography.definitions.utility.assistive-text"};const A=s(c).withConfig({displayName:"SignInModalSignInLink"})`
  && {
    z-index: ${u.interstitialLayer};
    margin-left: 5px;
    text-decoration: underline;
  }
`;A.defaultProps={colorToken:"colors.interactive.base.black",typeToken:"typography.definitions.utility.assistive-text"},e.exports={SignInModalBaseWrapper:I,SignInModalCloseButton:$,SignInModalButtons:E,SignInModalDek:S,SignInModalEmail:T,SignInModalHed:C,SignInModalSignInSection:B,SignInModalSignInLink:A,SignInModalSpotIllustration:w,SignInModalHedSpanTag:v}},1589:function(e,t,n){const{default:i,css:o}=n(3),{BREAKPOINTS:a}=n(6),{applyGridSpacing:r,cssVariablesGrid:s}=n(17),{calculateSpacing:l,minScreen:d,maxScreen:c,minMaxScreen:p,getColorToken:g,getTypographyStyles:u,firstLetterDropCap:m}=n(4),h=n(14),{universalGridCore:b}=n(54),y=n(57),{RowWrapper:f}=n(475),C=n(19),{GridItem:v}=n(27),S=n(1381),{SummaryRiverSection:w}=n(1377),{SummaryCollageOneGridWithMargin:k}=n(1611),{SectionTitleHed:x}=n(78),$=`\n  ${s()}\n  ${r("padding")}\n\n  margin: 0 auto;\n  width: 100%;\n  max-width: ${a.xxl};\n`,T=i(y).withConfig({displayName:"MultiPackageBaseRow"})`
  &:first-child,
  & ~ & {
    ${({hasMarginTopMultiPackageRow:e})=>e?"":"margin-top: 0;"}
  }

  inline-embed[name='align-right'] {
    text-align: right;
  }

  inline-embed[name='align-center'] {
    text-align: center;
  }
`,E=i(h.Utility).withConfig({displayName:"MultiPackageRow"})`
  &&& {
    align-items: center;
    width: auto;
  }
`,N=i(T).withConfig({displayName:"MultiPackageRow"})`
  ${({hasNoTopMargin:e})=>e?"":`margin-top: ${l(7)};`}

  ${({hasPlpFilterableContainerLightBackgroundColor:e,theme:t})=>e?`background-color: ${g(t,"colors.discovery.body.light.background")};`:""}

  ${({hasMediumMargin:e,hasNoBottomMargin:t,hasReducedMargin:n,isNativeAd:i})=>e?`margin-bottom: ${l(4)};`:t||i&&n?"margin-bottom: 0;":n?`margin-bottom: ${l(2)};`:`margin-bottom: ${l(7)};`}

  ${({hasMarginBottomMultiPackageRow:e})=>e?`\n          ${d(a.lg)} {\n            margin-bottom: ${l(5)};\n          }\n          ${p(a.md,a.lg)} {\n            margin-bottom: ${l(4)};\n          }\n          ${p(0,a.md)} {\n            margin-bottom: ${l(3)};\n          }`:""}

  ${({hasStickyLinkBanner:e})=>e?"\n        position: sticky;\n        top: 0px;\n        z-index: 700;\n      ":""} 

  /* TODO: this should be a configuration for a layout
     Specificity is required due to star selector in homepage  */
  ${d(a.lg)} {
    ${f}.homepage__half-column-row + && {
      width: 50%;
      max-width: 800px;
      ${x} {
        ${u("typography.definitions.discovery.subhed-section-secondary")};
      }
    }
    .homepage__half-column-row + && > ${k} {
      padding-left: var(--grid-gap);
    }
    ${w} {
      margin: 0 auto;
      max-width: 1600px;
    }
  }
`,L=i(C.WithMargins).withConfig({displayName:"DiscoveryQuoteRow"})`
  ${({hasTopAndBottomBorderQuote:e,theme:t})=>e?`\n    border-top:1px solid ${g(t,"colors.consumption.lead.standard.accent")};\n    border-bottom:1px solid ${g(t,"colors.consumption.lead.standard.accent")};`:""}

  ${v} {
    grid-column: 1/-1;

    ${d(a.md)} {
      grid-column: 3/11;
    }
  }
`,I=i(S).withConfig({displayName:"MultiPackageBody"})`
  p.has-dropcap {
    margin-top: ${l(4,"px")};

    &::first-letter {
      ${m};
    }

    &.has-dropcap__lead-standard-heading {
      &::first-letter {
        padding: 0.1em 0.05em 0 0;
        color: ${g("colors.consumption.lead.standard.heading")};
      }
    }

    &.has-dropcap__ignore-lead-standard-heading {
      &::first-letter {
        color: ${g("colors.consumption.body.standard.body")};
      }
    }
  }
  ${({constrainPagragraph:e})=>e&&`\n    inline-embed{\n      display: block;\n      p {\n        display:inline-block;\n        max-width: ${l(40.875)};\n        ${d(a.lg)} {\n          max-width: ${l(91.5)};\n        }\n      }\n    }\n  `}
`,B=o`
  &.puzzles-games-landing-page {
    .ticker-wrapper {
      margin-bottom: 0;
    }

    .ticker-view > div:nth-child(2) {
      margin-top: ${l(4)};
    }

    .summary-collage-six-puzzles-games .summary-item:first-child h3 {
      ${u("typography.definitions.discovery.description-core")};
      font-size: ${l(4)};
    }

    .verso-features {
      margin-bottom: ${l(4)};
    }

    > div:nth-child(3)
      .summary-collage-six-puzzles-games
      .summary-list--collection-list {
      ${c(a.lg)} {
        padding-top: 0;
      }
    }

    .summary-river-puzzles-games {
      h2 {
        font-size: 24px;
      }

      & > section {
        .summary-item:last-child {
          border-bottom: 0;
        }

        > div {
          margin-bottom: ${l(2)};

          > div:first-child {
            margin-bottom: 0;
          }
        }
      }

      .summary-item {
        padding-top: ${l(2)};
      }
    }

    .summary-item--is-dense .summary-item__asset-container {
      ${p(0,a.xl)} {
        display: block;
      }

      ${d(a.xl)} {
        float: none;
        margin-left: 0;
      }
    }

    .summary-list--collection-list {
      ${p(0,a.lg)} {
        border-top: 0;
        padding-top: 0;
      }
    }

    .summary-list__items .summary-item:not(:first-child) {
      margin-bottom: 0;
      padding-bottom: ${l(2)};
    }

    .summary-list__items .summary-item:first-child {
      ${p(0,a.lg)} {
        padding-bottom: ${l(2)};
      }

      ${d(a.lg)} {
        padding-bottom: 0;
      }
    }

    .summary-collage-six-puzzles-games .summary-item h3 {
      ${u("typography.definitions.discovery.hed-core-secondary")};
    }

    .summary-collage-six-puzzles-games h2,
    .summary-collection-grid h2 {
      ${u("typography.definitions.discovery.subhed-section-primary")};
    }

    .verso-embed-row inline-embed h1 {
      margin: 0;
      font-size: ${l(5.5)};
    }

    .verso-embed-row {
      margin: ${l(4)} 0;
    }

    ${I} {
      max-width: initial;
    }

    .verso-features h2 {
      font-size: 24px;
    }

    .summary-collage-six-puzzles-games h2 {
      font-size: 20px;
    }

    .summary-item__dek > a {
      ${u("typography.definitions.foundation.link-primary")};
      display: block;
      padding-top: ${l(2.5)};
      text-decoration: none;
      color: ${g("colors.interactive.base.brand-primary")};
    }

    .summary-item__dek > a:hover {
      text-decoration: underline;
    }
  }
`,A=i.div.withConfig({displayName:"MultiPackageContainer"})`
  ${({showFooterAdPadding:e})=>e&&`padding-bottom: ${l(10,"px")};`}

  ${({customClass:e})=>e&&"puzzles-games-landing-page"===e&&B}
  ${({hasMarginBottomMultiPackageRow:e})=>e?"\n            .verso-features {\n              && {\n                margin-bottom: 0;\n              }\n            }\n          ":""}
`,P=i.div.withConfig({displayName:"SectionJumpLinksWrapper"})`
  ${({theme:e})=>(e=>`\n    background: ${g(e,"colors.consumption.body.inverted.display-texture")};\n    ${d(a.md)} {\n      width: ${a.md};\n      padding: ${l(3)} ${l(9)} ${l(5)} ${l(9)};\n    }\n    padding: ${l(2)} ${l(5)} ${l(3.5)} ${l(5)};\n    margin: auto;\n    div {\n      div {\n        h1 {\n          text-align: center;\n        }\n        div {\n          a {\n            font-family: Konnect, helvetica, sans-serif;\n            font-style: normal;\n            line-height: ${l(2.4,"rem")};\n            font-size: ${l(2)};\n            &:not(.button):link,\n            &:not(.button):visited {\n              color: rgb(0, 0, 0);\n            }\n          }\n          display: grid;\n          ${d(a.md)} {\n            grid-template-columns: 1fr 1fr 1fr;\n            grid-row-gap: ${l(1.5)};\n          }\n          grid-template-columns: 1fr 1fr;\n          grid-row-gap: ${l(1)};\n        }\n      }\n    }\n  }\n  `)(e)}
`,D=i(N).withConfig({displayName:"MultiPackageReadMore"})`
  display: flex;
  justify-content: center;
`,R=i.div.withConfig({displayName:"PromoBoxWrapper"})`
  ${$}
`,M=i.div.withConfig({displayName:"EventsListWrapper"})`
  ${s()}

  margin: 0 auto;
  width: 100%;
  max-width: ${a.xxl};

  ${d(a.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,O=i.div.withConfig({displayName:"PromoBoxWrapper"})`
  ${$}
`,H=i.div.withConfig({displayName:"NewsletterWrapper"})`
  ${$}

  padding-top: ${l(6)};
  padding-bottom: ${l(6)};

  ${d(a.md)} {
    padding-top: ${l(9)};
    padding-bottom: ${l(9)};
  }
`,_=i.div.withConfig({displayName:"CMUnitWrapper"})`
  ${$}

  ${d(a.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,W=i.div.withConfig({displayName:"SubTopicDiscoveryWrapper"})`
  ${b(!0)}
  ${r("padding")}

  margin: 0 auto;
  width: 100%;
  max-width: ${a.xxl};

  ${d(a.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,G=i(C).withConfig({displayName:"GridWrapper"})`
  ${$}
`,j=i.div.withConfig({displayName:"EmbedWrapper"})`
  ${$}
`,F=i.div.withConfig({displayName:"TickerWrapper"})`
  ${({isInvertedTheme:e})=>e?`\n        ${s()}\n        ${r("padding",!0)}`:""+$}
`,V=i("div").withConfig({displayName:"MultipackageNoItemsBlock"})`
  ${s()}
  ${r("padding")}
  margin: 0 auto;
  margin-bottom: ${l(4)};
  width: 100%;
  max-width: ${a.xxl};
  color: white;
  font-family: 'LabGrotesque';
  ${({hasRule:e,theme:t})=>e?`\n        &::before {\n          border-top: 1px solid ${g(t,"colors.discovery.body.white.divider")};\n          content: '';\n          grid-column: 1/-1;\n          margin-bottom: ${l(4)};\n          display: block;\n        }\n      `:""}

  h3 {
    margin: 0 auto;
    width: fit-content;
    ${u("typography.definitions.consumptionEditorial.subhed-break-secondary")}
  }

  p {
    font-family: Proxima Nova;
    font-size: 12px;
  }
`,U=i.div.withConfig({displayName:"MultiPackageBodyWrapperGrid"})`
  ${b()}
  ${r("padding")}
`;e.exports={CMUnitWrapper:_,DiscoveryQuoteRow:L,EmbedWrapper:j,GridWrapper:G,EventsListWrapper:M,MultiPackageContainer:A,MultiPackageRow:N,MultiPackageBody:I,MultiPackageReadMore:D,NewsFeedWrapper:O,NewsletterWrapper:H,PromoBoxWrapper:R,SubTopicDiscoveryWrapper:W,TickerWrapper:F,MultipackageNoItemsBlock:V,MultiPackageBodyWrapperGrid:U,SectionJumpLinksWrapper:P,UtilityButton:E}},1611:function(e,t,n){const{default:i,css:o}=n(3),{BREAKPOINTS:a}=n(6),{applyGridSpacing:r,cssVariablesGrid:s}=n(17),{RubricLink:l}=n(72),{calculateSpacing:d,minScreen:c,minMaxScreen:p,getTypographyStyles:g,getColorToken:u}=n(4),{BaseLink:m}=n(10),{SocialIconsList:h}=n(25),{SpanWrapper:b}=n(86),y=i.div.withConfig({displayName:"SummaryCollageOneTitle"})`
  grid-column: 1 / -1;

  ${({isSingleFeature:e})=>!e&&`\n      margin-bottom: ${d(2)};\n\n      ${c(a.md)} {\n        margin-bottom: ${d(1)};\n      }\n\n      ${c(a.lg)} {\n        margin-bottom: ${d(0)};\n      }\n    `}
`,f=i.div.withConfig({displayName:"SummaryCollageOneCtaLink"})`
  grid-column: 1 / -1;
  text-align: center;

  span {
    display: block;
    width: 100%;
    text-align: center;
  }
`,C=i(m).withConfig({displayName:"SummaryCollageOneAnchorLink"})`
  ${g("typography.definitions.foundation.link-primary")}
  display: inline-block;
  margin-bottom: ${d(2)};
  vertical-align: top;
  ${c(a.lg)} {
    margin-bottom: ${d(4)};
  }
`;C.defaultProps={colorSecondaryLinkToken:"colors.interactive.base.dark",colorStaticLinkToken:"colors.interactive.base.brand-primary",linkStyle:"global"};const v=o`
  ${s()}
  ${r("padding")}

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--grid-gap);
  margin: 0 auto;
  width: 100%;
  max-width: ${a.xxl};
  row-gap: var(--grid-gap);

  .summary-item--layout-placement-text-below {
    &.summary-item--text-align-left,
    &.summary-item--text-align-center {
      .summary-item__hed {
        ${g("typography.definitions.discovery.hed-break-out")};
      }

      .summary-item__dek {
        ${g("typography.definitions.discovery.description-feature")};
      }
    }
  }

  .summary-item__hed-link {
    &::after {
      border-bottom: 1px solid
        ${u("colors.discovery.body.white.accent")};
    }
  }

  .summary-item__content:empty {
    display: none;
  }

  ${h} {
    justify-content: center;
  }

  ${c(a.md)} {
    grid-template-columns: repeat(12, 1fr);
  }
`,S=i.div.withConfig({displayName:"SummaryCollageOneItemComponent"})`
  grid-column: 1 / -1;

  &&& {
    border-bottom: 0;

    .summary-item__content {
      margin: 0;
      @media (min-width: 0) and (max-width: ${a.lg}) {
        margin: 0;
      }
    }
    @media (min-width: 0) and (max-width: ${a.md}) {
      padding-bottom: 0;
    }
  }
`,w=o`
  &&& {
    grid-gap: ${d(4)};
    grid-template-rows: auto 1fr auto;
    height: 100%;
  }

  ${S} {
    display: grid;
    align-items: center;
  }

  ${b}.summary-item__image {
    .summary-item__image {
      display: grid;
      justify-items: center;

      picture {
        max-width: 300px;
        ${c(a.lg)} {
          max-width: 400px;
        }
      }
    }

    .responsive-cartoon__caption {
      margin-top: 0;
      ${c(a.lg)} {
        margin-top: ${d(2)};
        width: 85%;
      }
    }
  }
`,k=o`
  ${p(0,a.lg)} {
    .summary-item__asset-container {
      ${r("margin",!0)};
    }
  }
`,x=o`
  &&& {
    grid-template-rows: unset;
    background-color: ${u("colors.discovery.body.dark.background")};
    max-width: ${a.xxl};

    ${p(a.sm,a.md)} {
      column-gap: ${d(9)};
      margin: ${d(0)};
      padding: ${d(0)};
    }
    ${c(a.md)} {
      column-gap: ${d(3)};
      margin: ${d(0)};
      padding: ${d(5)} ${d(3)};
    }
    ${c(a.lg)} {
      margin: ${d(0)};
      padding: ${d(7)} ${d(6)};
    }
    ${c(a.xl)} {
      column-gap: 2rem;
      margin: ${d(0)};
      padding: ${d(10)} ${d(8)};
    }
    ${c(a.xxl)} {
      column-gap: 2rem;
      margin: auto;
      padding: ${d(10)} ${d(8)};
    }
  }
  ${l} {
    color: ${u("colors.discovery.body.dark.context-signature")};
  }

  .summary-item__rubric {
    color: ${u("colors.discovery.body.dark.context-signature")};
  }

  .summary-item__dek {
    color: ${u("colors.discovery.body.dark.description")};
  }

  .summary-item__hed--hed-core-primary {
    ${g("typography.definitions.discovery.hed-core-primary")}
    color: ${u("colors.discovery.body.dark.heading")};
  }

  .summary-item__hed {
    color: ${u("colors.discovery.body.dark.heading")};
  }

  .summary-item--dark-background-right {
    ${c(a.md)} {
      grid-column: 2 / -2;
      margin: ${d(0)} ${d(-3)};
    }
    ${c(a.lg)} {
      grid-column: 2 / -2;
      margin: ${d(0)} ${d(-3)};
      padding: ${d(0)};
    }
    ${c(a.xl)} {
      grid-column: 2 / -2;
      margin: ${d(0)} ${d(-4)};
      padding: ${d(0)};
    }
    ${c(a.xxl)} {
      grid-column: 2 / -2;
      margin: ${d(0)};
      padding: ${d(0)};
    }

    .summary-item__asset-container {
      ${c(a.md)} {
        margin-left: ${d(-3)};
      }
      ${c(a.xl)} {
        margin-left: ${d(0)};
      }
    }
  }

  .summary-item__content {
    margin: ${d(0)};
    ${c(a.md)} {
      padding-right: ${d(3)};
    }
    ${c(a.lg)} {
      padding-right: ${d(5)};
    }
    ${c(a.xl)} {
      padding-right: ${d(3)};
    }
    ${c(a.xxl)} {
      padding-right: ${d(6)};
    }
  }
`,$=i.div.withConfig({displayName:"SummaryCollageOneGridWithMargin"})`
  ${v}
  ${({isSingleFeature:e})=>e&&w}

  ${({hasFullWidthImage:e})=>e&&k}
  
  ${({isFullBleedDarkBackground:e})=>e&&x}
`,T=i.div.withConfig({displayName:"SummaryCollageOneIsFullBleed"})`
  ${({isFullBleedDarkBackground:e})=>e&&o`
      background-color: ${u("colors.discovery.body.dark.background")};
      max-width: 100%;
    `}
`;e.exports={SummaryCollageOneTitle:y,SummaryCollageOneCtaLink:f,SummaryCollageOneGridWithMargin:$,SummaryCollageOneIsFullBleed:T,SummaryCollageOneItemComponent:S,SummaryCollageOneAnchorLink:C}},1630:function(e,t,n){const{asConfiguredComponent:i}=n(9);e.exports=i(n(1631),"SponsoredContentHeader")},1631:function(e,t,n){const i=n(8),o=n(1),a=n(0),{useIntl:r}=n(2),s=n(1555).default,{trackComponent:l}=n(5),{SponsoredContentHeaderWrapper:d,SponsoredContentHeaderExternalLink:c,SponsoredContentHeaderInfoBox:p,SponsoredContentHeaderBylineText:g,SponsoredContentHeaderResponsiveAsset:u,SponsoredContentHeaderSponsorName:m}=n(1632),{getBylineText:h,getLogoRatio:b,getSponsoredHeaderDisplayOptions:y,getValidBylineOption:f}=n(1633),C=({brandName:e,bylineOption:t,bylineVariant:n,campaignUrl:o,className:C,sponsorLogo:v,sponsorName:S})=>{a.useEffect(()=>{l("SponsoredContentHeader")},[]);const w=r(),k=f(t),{isBrandedLegacy:x,shouldDisplayLogo:$}=y({bylineOption:k,bylineVariant:n,hasLogo:!!v}),T=h({intl:w,bylineOption:k,brandName:e}),E=b({sponsorLogo:v});return a.createElement(d,{isBrandedLegacy:x,className:i(C,k.replace("_","-")),"data-testid":"SponsoredContentHeaderWrapper"},a.createElement(c,{additionalRelVals:["sponsored"],href:o||void 0,attributes:{"aria-label":w.formatMessage(s.sponsoredLinkCTA,{sponsorName:S})}},a.createElement(p,{isBrandedLegacy:x},a.createElement(g,{isBrandedLegacy:x,"data-testid":"SponsoredContentHeaderBylineText"},T),$?a.createElement(u,{altText:v.altText,constrainLogoByWidth:E>1,isBrandedLegacy:x,sources:v.sources}):a.createElement(m,{isBrandedLegacy:x},S))))};C.propTypes={brandName:o.string.isRequired,bylineOption:o.string.isRequired,bylineVariant:o.string.isRequired,campaignUrl:o.string.isRequired,className:o.string,sponsorLogo:o.any,sponsorName:o.string.isRequired},C.displayName="SponsoredContentHeader",e.exports=C},1632:function(e,t,n){const i=n(3).default,{BaseText:o}=n(10),{calculateSpacing:a,getColorStyles:r,getTypographyStyles:s}=n(4),l=n(93),d=n(31),c=i.div.withConfig({displayName:"SponsoredContentHeaderWrapper"})`
  display: flex;
  justify-content: center;
  ${({theme:e})=>r(e,"background-color","colors.discovery.body.light.background")};
  padding: ${a(2)};
  width: 100%;
  min-height: 80px;

  ${({isBrandedLegacy:e})=>e?`\n    grid-column: 1 / -1;\n    padding: unset;\n    height: 60px;\n    min-height: unset;\n\n    &.light-theme {\n      ${({theme:e})=>r(e,"background-color","colors.background.light")}\n    }\n  `:""}
`,p=i(d).withConfig({displayName:"SponsoredContentHeaderExternalLink"})`
  text-decoration: none;
`,g=i.div.withConfig({displayName:"SponsoredContentHeaderInfoBox"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${({isBrandedLegacy:e})=>e?"& { flex-direction: unset; }":""}
`,u=i(o).withConfig({displayName:"SponsoredContentHeaderBylineText"})`
  ${({theme:e,isBrandedLegacy:t})=>t?`\n      ${s(e,"typography.definitions.globalEditorial.context-primary")};\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: flex-end;\n      padding-right: ${a(2)};\n      height: 100%;\n\n      &.light-theme {\n        ${({theme:e})=>r(e,"color","colors.discovery.body.light.heading")}\n      }\n    }\n  `:""}
`;u.defaultProps={as:"div",colorToken:"colors.consumption.lead.standard.syndication",typeIdentity:"typography.definitions.globalEditorial.syndication"};const m=i(l).withConfig({displayName:"SponsoredContentHeaderResponsiveAsset"})`
  &.responsive-asset {
    display: flex;
    align-items: center;
    margin-top: ${a(1)};
    overflow: visible;

    ${({theme:e,isBrandedLegacy:t})=>t?`\n      justify-content: flex-start;\n      margin-top: unset;\n      padding-left: ${a(2)};\n      border-left: 1px solid;\n      ${r(e,"border-color","colors.discovery.body.light.divider")};\n    `:""}
  }

  &.responsive-image {
    height: 60px;

    img {
      height: 100%;
    }

    ${({constrainLogoByWidth:e})=>e?"{\n      width: 60px;\n      height: unset;\n\n      img {\n        height: unset;\n      }\n    }":""}
  }
`,h=i(o).withConfig({displayName:"SponsoredContentHeaderSponsorName"})`
  display: flex;
  align-items: center;
  margin-top: ${a(.5)};

  ${({isBrandedLegacy:e,theme:t})=>e?`\n    justify-content: flex-start;\n    margin-top: unset;\n    padding-left: ${a(.5)};\n\n    &.light-theme {\n      ${r(t,"color","colors.discovery.body.light.syndication")};\n    }\n  `:""}
`;h.defaultProps={as:"div",colorToken:"colors.consumption.lead.standard.syndication",typeIdentity:"typography.definitions.consumptionEditorial.description-feature"},e.exports={SponsoredContentHeaderWrapper:c,SponsoredContentHeaderExternalLink:p,SponsoredContentHeaderInfoBox:g,SponsoredContentHeaderBylineText:u,SponsoredContentHeaderResponsiveAsset:m,SponsoredContentHeaderSponsorName:h}},1633:function(e,t,n){const i=n(1555).default,o={brand_x_advertiser:i.bylineBrandXAdvertiser,branded_content:i.bylineBrandedContent,created:i.bylineCreated,original_content_by:i.bylineOriginalContentBy,paid_post:i.bylinePaidPost,produced:i.bylineProduced,produced_by_advertiser:i.bylineProducedByAdvertiser,produced_by_brand:i.bylineProducedByBrand,sponsored:i.bylineSponsored,sponsored_content:i.bylineSponsoredContent,in_collaboration:i.bylineInCollaboration,sponsored_by:i.bylineSponsoredBy,in_partnership:i.bylineInPartnership,advertisement_feature_with:i.bylineAdvertisementFeatureWith};function a(e){return Object.prototype.hasOwnProperty.call(o,e)?e:"produced_by_advertiser"}e.exports={BYLINE_TEMPLATES:o,getBylineText:function({intl:e,bylineOption:t="produced_by_advertiser",brandName:n}){return e.formatMessage(o[t],{brandName:n})},getLogoRatio:function({sponsorLogo:e}){var t,n,i,o;return((null===(n=null===(t=null==e?void 0:e.sources)||void 0===t?void 0:t.sm)||void 0===n?void 0:n.height)||0)/((null===(o=null===(i=null==e?void 0:e.sources)||void 0===i?void 0:i.sm)||void 0===o?void 0:o.width)||1)},getSponsoredHeaderDisplayOptions:function({bylineOption:e,bylineVariant:t,hasLogo:n}){const i=a(e),o="sponsored"===i||"produced"===i;return{isBrandedLegacy:o,shouldDisplayLogo:n&&("logo"===t||o)}},getValidBylineOption:a}},1634:function(e,t,n){const i=n(0),o=n(1),{trackComponent:a}=n(5),r=({children:e,name:t})=>{if(i.useEffect(()=>{a("Slot")},[]),!t)throw new Error("A slot must contain a name!");return e};r.propTypes={children:o.node.isRequired,name:o.string.isRequired};e.exports={Slot:r,getSlots:(e,t=[])=>{const n=new Set(t),o={};let a;const s=[];return i.Children.forEach(e,e=>{a=e.props.name,s.push(e.props.url),e.type===r&&a&&(0===n.size||n.has(a))&&(o[a]=e)}),{slots:o,urlData:s}}}},1635:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(1636);e.exports=i(o,"FilterableSummaryList")},1636:function(e,t,n){const i=n(0),o=n(1),{useIntl:a}=n(2),{calculateSpacing:r}=n(4),{getSlots:s}=n(1556),l=n(250),d=n(261),c=n(42),{Disclaimer:p}=n(95),g=n(100),{trackComponent:u}=n(5),{componentTracking:m,googleAnalytics:h}=n(12),{FilterableSummaryListFullBleed:b,FilterableSummaryListWrapper:y,TitleWrapper:f,ChipWrapper:C,CarouselWrapper:v,FilterableSummaryListGrid:S,FilterableSummaryListDynamicGridItemLayout:w}=n(1557),{ArticleGalleryCarouselBtnWrapper:k,ArticleGalleryCarouselButton:x}=n(117),$=n(1637).default,T={spacing:{sm:r(1.5),xl:r(2)},width:{sm:`calc(60% - ${r(1.5)})`,lg:`calc(27% - ${r(1.5)})`,xl:`calc(24% - ${r(2)})`,xxl:`calc(21% - ${r(2)})`}},E=({affiliateDisclaimer:e,buttonConfig:t,children:n,className:o,controlButtonIcon:r,controlPlacement:E,controlPosition:N,dangerousDek:L,dangerousHed:I,defaultToggleChipTitle:B,hasBorderBottom:A,hasCarouselSliderPagination:P,hasControls:D,hasCustomSlider:R,hasImpressionTracking:M,hasNavigationButtonVariation:O,hasNoHorizontalScrollCarousel:H,paginationStyle:_,hasPadding:W,hasPagination:G,hasProductDisclaimerAlternativeStyle:j,hasTitleMarginTop:F,hasTitleNoMargin:V,hasToggleGridColor:U,hasHigherHorizontalPadding:z,sectionTitleVariation:q,selectedToggleChipTitle:K,shouldAppendFilterInUrl:Y,shouldDisplaySingleSlot:Z,shouldNotDisplayAllLabel:X,shouldEnableBundleComponentAnalytics:J,shouldEnableProductDisclaimer:Q,hasCarouselControl:ee,trackingNamespace:te,isDotClickable:ne,layout:ie,pos:oe,gridConfig:ae})=>{i.useEffect(()=>{u("FilterableSummaryList")},[]);const{formatMessage:re}=a(),{slots:se,urlData:le}=s(n),de=Object.keys(se),[ce,pe]=i.useState(de),[ge,ue]=i.useState(ce[0]),[me,he]=i.useState(B),be=I||L,ye=(null==te?void 0:te.toggle)||I,fe=(null==te?void 0:te.card)||I;if(0===ce.length)return null;const Ce=ce.length>1||Z,ve=t.hasCtaLink?re($.atArticleGalleryCarouselBtnTextWithCtaLink,{categoryName:t.name}):re($.atArticleGalleryCarouselBtnText,{categoryName:t.name}),{isDynamicGridItemLayout:Se,shouldDisplayDenseGrid:we}=ae||{},ke=()=>i.Children.map(se[ge].props.children,(e,t)=>{const n=m.addDataSectionTitleAttribute(J,`${fe}/${ge}/`,t,!1),o=i.cloneElement(e,{analyticsDataAttribute:n});return i.createElement("div",null,o)}),xe=(e,t)=>{var n,i;ue(t),Z&&(e.detail.checked?(pe([t]),K&&he(K)):(ue(de[0]),pe(de),he(B))),n=t,i="body",h.emitUniqueGoogleTrackingEvent("toggle-click",{clickText:n,clickType:i})};return i.useEffect(()=>{var e;{const t=decodeURIComponent(null===(e=null===window||void 0===window?void 0:window.location)||void 0===e?void 0:e.hash),n=ce.findIndex(e=>"#"+e.toLowerCase()===t.toLowerCase());ue(ce[n>=0?n:0])}},[ce]),i.createElement(y,{className:o,hasToggleGridColor:U,hasPadding:W,hasBorderBottom:A},be&&i.createElement(f,{hasPadding:W,hasTitleMarginTop:F,as:c[q],dangerousHed:I,dangerousDek:L,hasTitleNoMargin:V}),Ce&&i.createElement(C,{hasToggleGridColor:U,hasPadding:W},i.createElement(d,{contentAlign:"center",layout:"nowrap",hasToggleGridColor:U,label:me},ce.map((e,t)=>{const n=m.addDataSectionTitleAttribute(J,`${ye}/${e}`),o=e===ge;return X&&"All"===e?null:i.createElement(l,{analyticsDataAttribute:n,key:e,isChecked:o,hasToggleGridColor:U,onChange:t=>xe(t,e),isAnchorUrl:Y,redirectUrl:le[t],shouldDisplaySingleChip:Z},e)}))),function(){switch(ie){case"GridFourColumns":return Se?i.createElement(w,{shouldDisplayDenseGrid:we},ke()):i.createElement(S,null,ke());case"FullBleed":return i.createElement(b,null,ke());default:return i.createElement(v,null,i.createElement(p.TextCenterNoTopRule,{isEnabled:Q&&ee,hasHigherHorizontalPadding:z,hasProductDisclaimerAlternativeStyle:j,disclaimerHtml:e}),i.createElement(g,{hasControls:D,hasNavigationButtonVariation:O,hasPagination:G,controlButtonIcon:O?"ArrowIcon":r,controlPlacement:E,controlPosition:N,isDotClickable:ne,hasPadding:W,hasNoHorizontalScrollCarousel:H,hasImpressionTracking:M,paginationStyle:P&&"slider"===_?_:"bullet",hasCustomSlider:P&&R,dangerousHed:be,pos:oe},i.Children.map(se[ge].props.children,(e,t)=>{const n=m.addDataSectionTitleAttribute(J,`${fe}/${ge}/`,t,!1),o=i.cloneElement(e,{analyticsDataAttribute:n}),a=`${be}/${ge}`;return i.createElement(g.CarouselItem,Object.assign({},T,{key:`${ge}-${t}`,carouselTitle:a,carouselItemIndex:t,carouselItemName:e.props.dangerousHed,pos:oe}),o)})),t.showButton&&t.url&&i.createElement(k,null,i.createElement("div",{className:"more-products"},i.createElement(x,{className:"article-gallery__more-button",label:ve,btnStyle:"outlined",ariaLabel:ve,href:t.hasCtaLink?t.url:"/products/shop"+t.url,inputKind:"link"}))))}}())};E.propTypes={affiliateDisclaimer:o.string,buttonConfig:o.object,children:o.node.isRequired,className:o.string,controlButtonIcon:o.oneOf(["ChevronIcon","ArrowIcon"]),controlPlacement:o.oneOf(["right","space-between"]),controlPosition:o.oneOf(["top","bottom","center"]),dangerousDek:o.string,dangerousHed:o.string,defaultToggleChipTitle:o.string,gridConfig:o.object,hasBorderBottom:o.bool,hasCarouselControl:o.bool,hasCarouselSliderPagination:o.bool,hasControls:o.bool,hasCustomSlider:o.bool,hasHigherHorizontalPadding:o.bool,hasImpressionTracking:o.bool,hasNavigationButtonVariation:o.bool,hasNoHorizontalScrollCarousel:o.bool,hasPadding:o.bool,hasPagination:o.bool,hasProductDisclaimerAlternativeStyle:o.bool,hasTitleMarginTop:o.bool,hasTitleNoMargin:o.bool,hasToggleGridColor:o.bool,isDotClickable:o.bool,layout:o.string,paginationStyle:o.string,pos:o.number,sectionTitleVariation:o.string,selectedToggleChipTitle:o.string,shouldAppendFilterInUrl:o.bool,shouldDisplaySingleSlot:o.bool,shouldEnableBundleComponentAnalytics:o.bool,shouldEnableProductDisclaimer:o.bool,shouldNotDisplayAllLabel:o.bool,trackingNamespace:o.shape({toggle:o.string,card:o.string})},E.displayName="FilterableSummaryList",E.defaultProps={buttonConfig:{name:"",showButton:!1,url:""},controlButtonIcon:"ChevronIcon",controlPlacement:"space-between",controlPosition:"center",hasControls:!0,hasHigherHorizontalPadding:!1,hasImpressionTracking:!1,hasNoHorizontalScrollCarousel:!1,hasPagination:!0,hasTitleMarginTop:!1,isDotClickable:!1,shouldAppendFilterInUrl:!0,shouldDisplaySingleSlot:!1,shouldEnableBundleComponentAnalytics:!1,shouldEnableProductDisclaimer:!1,shouldNotDisplayAllLabel:!1},E.displayName="FilterableSummaryList",e.exports=E},1637:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({atArticleGalleryCarouselBtnText:{id:"FilterableSummaryList.AtArticleGalleryCarouselBtnText",defaultMessage:"VIEW ALL {categoryName}",description:"Article and Gallery carousel button text"},atArticleGalleryCarouselBtnTextWithCtaLink:{id:"FilterableSummaryList.AtArticleGalleryCarouselBtnTextWithCtaLink",defaultMessage:"{categoryName}",description:"Article and Gallery carousel button text for cta link"}})},1716:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AGE_GATE_COOKIE_EXPIRATION_IN_DAYS=t.AGE_GATE_COOKIE_KEY=t.AGE_GATE_ACCEPT=void 0,t.AGE_GATE_ACCEPT="accept",t.AGE_GATE_COOKIE_KEY="ageGate",t.AGE_GATE_COOKIE_EXPIRATION_IN_DAYS=28},1717:function(e,t,n){e.exports=n(1718)},1718:function(e,t,n){const i=n(1),o=n(0),a=n(47),{PaywallInlineBarrierWrapper:r}=n(1719),{trackComponent:s}=n(5),l=function(e){o.useEffect(()=>{s("PaywallInlineBarrier")},[]);const{position:t,className:n}=e;return o.createElement(r,{className:n,"data-testid":"PaywallInlineBarrierWrapper"},o.createElement(a,{position:t,aria:{"aria-live":"polite"}}))};l.propTypes={className:i.string,position:i.string},l.defaultProps={position:"paywall-inline-barrier"},e.exports=l},1719:function(e,t,n){const{default:i}=n(3),o=i.aside.withConfig({displayName:"PaywallInlineBarrierWrapper"})`
  width: auto;
  height: auto;

  @media print {
    display: none;
  }
`;e.exports={PaywallInlineBarrierWrapper:o}},1720:function(e,t,n){const i=n(1),o=n(0),{useIntl:a}=n(2),r=n(14),s=n(41),l=n(1721).default,{componentTracking:d}=n(12),{useOnAdFilled:c}=n(73),{asConfiguredComponent:p}=n(9),{trackComponent:g}=n(5),{SummaryCollectionSplitColumnsWrapper:u,SummaryCollectionSplitColumnsItems:m,SummaryCollectionSplitColumnsRecsWrapper:h,SummaryCollectionSplitColumnsItem:b}=n(1722),y=({className:e,dangerousHed:t,guideItem:n,hasBackgroundColor:i,hasBorderItem:s,hasExtraRubricSpace:p,hasLessBottomSpace:y,hasTighterBylineSpacing:f,itemHedTag:C,location:v,recommendedItems:S,recommendedItemCount:w,shouldHideDangerousDek:k,shouldAppendReadMoreLinkForDek:x,shouldHideBylines:$,shouldEnableBundleComponentAnalytics:T,summaryItemRubricVariation:E,trackingNamespace:N})=>{o.useEffect(()=>{g("SummaryCollectionSplitColumns")},[]);const{formatMessage:L}=a(),{items:I,recommendedType:B,recommendedClickout:A}=S,P=C||(t?"h3":"h2"),[D]=c("trending-ad");return o.createElement(u,{className:e,"data-testid":"SummaryCollectionSplitColumnsWrapper",hasBackgroundColor:i},o.createElement(m,{"data-testid":"SummaryCollectionSplitColumnsItems",showTrendingAd:D},o.createElement(h,null,o.createElement("p",null,L(l.recommendedTitle,{recommendedType:B})),I.slice(0,w).map((e,t)=>{const n=d.addDataSectionTitleAttribute(T,null==N?void 0:N.item,t);return o.createElement(o.Fragment,{key:t},o.createElement(b,Object.assign({},e,{analyticsDataAttribute:n,variation:"TextBelowImageLeftHasRuleWithDek",hasBorder:s,hedTag:P,key:t,rubricVariation:E,"data-testid":"SummaryCollectionSplitColumnsItem",shouldHideDangerousDek:k,shouldAppendReadMoreLinkForDek:x,shouldHideBylines:$,hasLessBottomSpace:y,hasExtraRubricSpace:p})))}),A&&o.createElement(r.Utility,{label:L(l.viewAllButton,{location:v,recommendedType:B}),inputKind:"link",href:A})),o.createElement(b,Object.assign({},n[0],{image:n[0].lede,dangerousHed:v?L(l.guideItemHed,{location:v}):t,variation:"TextBelowImageLeftHedAndDek",hasBorder:s,hedTag:P,rubricVariation:E,"data-testid":"SummaryCollectionSplitColumnsItem",shouldHideBylines:$,hasTighterBylineSpacing:f,hasLessBottomSpace:y,hasExtraRubricSpace:p}))))};y.propTypes={className:i.string,dangerousHed:i.string,guideItem:i.arrayOf(i.shape(s.propTypes)).isRequired,hasBackgroundColor:i.bool,hasBorderItem:i.bool,hasExtraRubricSpace:i.bool,hasLessBottomSpace:i.bool,hasTighterBylineSpacing:i.bool,itemHedTag:i.string,location:i.string,recommendedItemCount:i.number,recommendedItems:i.shape({items:i.arrayOf(i.shape(s.propTypes)),recommendedType:i.string,recommendedClickout:i.string}).isRequired,shouldAppendReadMoreLinkForDek:i.bool,shouldEnableBundleComponentAnalytics:i.bool,shouldHideBylines:i.bool,shouldHideDangerousDek:i.bool,summaryItemRubricVariation:i.string,trackingNamespace:i.object},y.defaultProps={hasBackgroundColor:!0,hasBorderItem:!0,hasExtraRubricSpace:!1,hasLessBottomSpace:!1,hasTighterBylineSpacing:!1,recommendedItemCount:2,shouldAppendReadMoreLinkForDek:!0,shouldHideBylines:!0,shouldHideDangerousDek:!1},y.displayName="SummaryCollectionSplitColumns",e.exports=p(y,"SummaryCollectionSplitColumns")},1721:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({viewAllButton:{id:"SummaryCollectionSplitColumns.ViewAllButton",defaultMessage:"View All {location} {recommendedType}",description:"button label for view all button"},guideItemHed:{id:"SummaryCollectionSplitColumns.GuideItemHed",defaultMessage:"{location} Travel Guide",description:"dangerousHed for guideItem"},recommendedTitle:{id:"SummaryCollectionSplitColumns.RecommendedTitle",defaultMessage:"Recommended {recommendedType}",description:"recommended title for recircs"}})},1722:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};const o=n(0),{default:a}=n(3),{BylineWrapper:r,BylinePreamble:s,BylineName:l,BylineLink:d}=n(97),c=n(41),{GridItem:p}=n(27),g=n(19),{calculateSpacing:u,getColorToken:m,getColorStyles:h,getTypographyStyles:b,minScreen:y,styledProperty:f}=n(4),{BREAKPOINTS:C}=n(6),v=a.div.withConfig({displayName:"SummaryCollectionSplitColumnsWrapper"})`
  margin: ${u(4)} 0;
  background-color: ${({hasBackgroundColor:e})=>e?m("colors.discovery.body.light.background"):"transparent"};
`,S=`\n  &:last-child {\n    padding-bottom: 0;\n    \n    ${y(C.md)}{\n      padding-bottom: ${u(2)};\n    }\n  }\n`,w=a(e=>{var{columnAmount:t,variation:n,shouldHideDangerousDek:a,hasExtraRubricSpace:r,hasLessBottomSpace:s,hasTighterBylineSpacing:l}=e,d=i(e,["columnAmount","variation","shouldHideDangerousDek","hasExtraRubricSpace","hasLessBottomSpace","hasTighterBylineSpacing"]);const p=c[n];return o.createElement(p,Object.assign({},d))}).withConfig({displayName:"SummaryCollectionSplitColumnsItem"})`
  ${v} & {
    padding-bottom: ${u(2)};

    ${y(C.md)} {
      border-bottom: 0;
    }

    .summary-item__rubric {
      ${b("typography.definitions.globalEditorial.context-primary")}
      display: block;
      color: ${m("colors.discovery.body.light.context-signature")};

      ${y(C.md)} {
        margin-bottom: ${({hasExtraRubricSpace:e})=>u(e?1:.5)};
      }
    }

    .summary-item__hed-link {
      color: ${m("colors.discovery.body.light.heading")};

      &::after {
        display: none;
      }
    }

    .summary-item__hed {
      ${b("typography.definitions.discovery.hed-bulletin-primary")}
      margin-bottom: 0;
    }

    .summary-item__dek {
      ${b("typography.definitions.discovery.description-page")}
      display: ${({shouldHideDangerousDek:e})=>e?"none":"block"};
      margin: ${u(2)} 0 ${u(1)};
      color: ${m("colors.discovery.body.white.description")};
    }

    .summary-item__content {
      padding-bottom: ${({hasLessBottomSpace:e})=>e?u(0):""};
    }

    .summary-item__byline {
      margin-top: ${({hasTighterBylineSpacing:e})=>u(e?1:2)};

      ${r},
      ${s},
      ${l},
      ${d} {
        ${b("typography.definitions.globalEditorial.accreditation-core")}
        color: ${m("colors.discovery.body.light.accreditation")};
      }

      ${d}:link {
        color: ${m("colors.discovery.body.light.accreditation")};
      }
    }

    .summary-item__metadata-secondary {
      margin: ${u(2)} 0 0 0;
    }

    ${f("hasBorder",!1,S)};
  }
`,k=a(g.ThreeUp).withConfig({displayName:"SummaryCollectionSplitColumnsItems"})`
  ${p} {
    grid-column: 1 / -1;
    margin-top: ${u(2)};
  }
  ${p}:first-of-type {
    margin: ${u(3)} 0;
    ${y(C.md)} {
      grid-column: span 7;
    }
  }
  ${p}:last-of-type {
    ${y(C.md)} {
      grid-column: span 5;
      margin: ${u(3)} 0;
    }
  }
`,x=a("div").withConfig({displayName:"SummaryCollectionSplitColumnsRecsWrapper"})`
  display: grid;
  grid-column-gap: ${u(3)};
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: ${u(2)};
  height: 100%;

  ${y(C.md)} {
    display: grid;
    grid-template-rows: 5% 75% 20%;
    grid-row-gap: ${u(1)};
    border-right: 1px solid;
    border-color: ${({theme:e})=>h(e,"border-color","colors.consumption.body.standard.divider")};
    padding-right: ${u(3)};
  }

  p {
    grid-column: span 6;
    grid-row: 1 / 1;
    align-self: center;
    margin: 0;
    ${({theme:e})=>b(e,"typography.definitions.foundation.link-primary")}
  }

  .summary-item {
    display: grid;
    grid-column-gap: 1rem;
    grid-column: span 6;
    grid-template-columns: 40% 60%;
    align-items: center;

    ${y(C.sm)} {
      grid-template-columns: 1fr 1fr;
    }

    ${y(C.md)} {
      display: unset;
      grid-column: span 3;
      grid-row: 2 / 2;
    }
  }

  .button {
    grid-column: span 6;
    max-height: ${u(6)};
    ${y(C.md)} {
      grid-column: 2 / span 4;
      grid-row: 3;
    }
    ${y(C.lg)} {
      justify-self: center;
      padding: 0 ${u(6)};
    }
  }
`;e.exports={SummaryCollectionSplitColumnsWrapper:v,SummaryCollectionSplitColumnsItems:k,SummaryCollectionSplitColumnsRecsWrapper:x,SummaryCollectionSplitColumnsItem:w}},1723:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(1724);e.exports=i(o,"VersoFilterableSummaryList")},1724:function(e,t,n){const i=n(0),o=n(1),a=n(143),r=n(49),{useIntl:s}=n(2),{Slot:l}=n(1556),d=n(479),c=n(1725),p=n(1728),{FilterableSummaryList:g}=n(1729),u=n(252),m=n(41),{trackComponent:h}=n(5),{formatGtmData:b,productImpressionTracking:y}=n(244),f=({copilotId:e,buttonConfig:t,ctaCardAspectRatio:n,dangerousHed:o,dangerousDek:f,dropShipSellers:C,groups:v,hasBorder:S,hasCarouselSliderPagination:w,hasControls:k,hasImageGrid:x,hasAtRetailerNameLowerCase:$,hasNavigationButtonVariation:T,hasPadding:E,hasProductPriceColor:N,hasProductNewPriceColor:L,hasProductWhiteBackground:I,hasGridColumn:B,hasUnderlineHed:A,isProductCardName:P,isProductCardRetailerName:D,shouldCheckProductInView:R,hasMarginTopAuto:M,hasPLPBrandNameContextTitle:O,hasPLPCardNameDescriptionCore:H,paginationStyle:_,sectionTitleVariation:W,shouldEnableBundleComponentAnalytics:G,shouldHideDangerousDek:j,shouldHidePublishDate:F,shouldRenderCtaCard:V,showOfferUrl:U,summaryItemVariation:z,shouldUseProductPriceSecondary:q,expVariationName:K,isDropshipProduct:Y,trackingNamespace:Z,isDotClickable:X,layout:J,gridConfig:Q})=>{i.useEffect(()=>{h("VersoFilterableSummaryList")},[]);const{formatMessage:ee}=s(),te=J||"Carousel",ne="ProductCarousel"===te,ie="GridFourColumns"===te?"PLP":J,oe=o?o.replace(/[^a-zA-Z]+/gi,"-").toLowerCase():"",{gridItemColSpan:ae}=Q||{};i.useEffect(()=>{ne||(window.addEventListener("scroll",r(()=>{y(document.getElementsByClassName("impressionTracking"),ie)},1e3)),window.addEventListener("load",()=>y(document.getElementsByClassName("impressionTracking"),ie)))},[ie,ne]);function re(t){switch(te){case"ProductCarousel":case"GridFourColumns":return(t=>{const n=m.TextBelowLeft;return t.items.map((t,o)=>"product"===t.contentType?i.createElement(u,Object.assign({},t,{key:`${t.dangerousHed}-${o}`,hasAtRetailerNameLowerCase:$,hasImageGrid:x,hasProductPriceColor:N,hasProductNewPriceColor:L,shouldUseProductPriceSecondary:q,hasProductWhiteBackground:I,isProductCardName:P,isProductCardRetailerName:D,hasMarginTopAuto:M,hasPLPBrandNameContextTitle:O,hasPLPCardNameDescriptionCore:H,hasUnderlineHed:A,hasCarouselControl:ne,shouldCheckProductInView:R,layout:te,copilotID:e,dropShipSellers:C,isDropshipProduct:Y,showOfferUrl:U,hasImpressionTracking:!0,data_item:t,onClick:()=>b(window,t,o,ie,oe),expVariationName:K,layoutName:oe})):i.createElement(n,Object.assign({gridItemColSpan:ae,shouldHideIcon:!0,shouldHideMetadataSecondary:!0},t,{key:`${t.dangerousHed}-${o}`,hasBorder:S,hasUnderlineHed:A,shouldHideDangerousDek:j,shouldHidePublishDate:!0,hasHedCorePrimary:!0})))})(t);case"ArticleCarousel":return(e=>{const t=m[z];return e.items.map((e,n)=>i.createElement(t,Object.assign({},e,{key:`${e.dangerousHed}-${n}`,hasBorder:S,hasUnderlineHed:A,shouldHideDangerousDek:j,shouldHidePublishDate:F})))})(t);default:return t.items.map((e,t)=>i.createElement(d,Object.assign({},e,{key:`${e.hed}-${t}`})))}}const se=B&&"GridFourColumns"===te,[le]=i.useState(parseInt(a(),10));return v&&0!==v.length?i.createElement(g,{dangerousHed:o,dangerousDek:f,sectionTitleVariation:W,shouldEnableBundleComponentAnalytics:G,hasImpressionTracking:!0,trackingNamespace:Z,isDotClickable:X,hasCarouselSliderPagination:w,hasCarouselControl:ne,hasControls:k,hasNavigationButtonVariation:T,hasToggleGridColor:se,hasPadding:E,layout:te,pos:le,paginationStyle:_,buttonConfig:t,gridConfig:Q},v.map(e=>{const t=re(e);V&&e.url&&t.push(i.createElement(c,{aspectRatio:n,key:"cta-"+e.label,url:e.url},ee(p.ctaMessage,{groupName:e.label.toLocaleLowerCase()})));const o=t.filter(e=>{var t,n,i;return((null===(n=null===(t=null==e?void 0:e.props)||void 0===t?void 0:t.image)||void 0===n?void 0:n.id)||(null===(i=null==e?void 0:e.props)||void 0===i?void 0:i.aspectRatio))&&e});return i.createElement(l,{key:e.label,name:e.label,url:e.url},o)})):null};f.propTypes={buttonConfig:o.object,copilotId:o.string,ctaCardAspectRatio:o.arrayOf(o.number),dangerousDek:o.string,dangerousHed:o.string,dropShipSellers:o.arrayOf(o.string),expVariationName:o.string,gridConfig:o.object,groups:o.arrayOf(o.object),hasAtRetailerNameLowerCase:o.bool,hasBorder:o.bool,hasCarouselSliderPagination:o.bool,hasControls:o.bool,hasGridColumn:o.bool,hasImageGrid:o.bool,hasMarginTopAuto:o.bool,hasNavigationButtonVariation:o.bool,hasPadding:o.bool,hasPLPBrandNameContextTitle:o.bool,hasPLPCardNameDescriptionCore:o.bool,hasProductNewPriceColor:o.bool,hasProductPriceColor:o.bool,hasProductWhiteBackground:o.bool,hasToggleGridColor:o.bool,hasUnderlineHed:o.bool,isDotClickable:o.bool,isDropshipProduct:o.bool,isProductCardName:o.bool,isProductCardRetailerName:o.bool,layout:o.string,paginationStyle:o.string,sectionTitleVariation:o.string,shouldCheckProductInView:o.bool,shouldEnableBundleComponentAnalytics:o.bool,shouldHideDangerousDek:o.bool,shouldHidePublishDate:o.bool,shouldRenderCtaCard:o.bool,shouldUseProductPriceSecondary:o.bool,showNewProductCardDesign:o.bool,showOfferUrl:o.bool,summaryItemVariation:o.string,trackingNamespace:o.shape({toggle:o.string,card:o.string})},f.displayName="VersoFilterableSummaryList",f.defaultProps={ctaCardAspectRatio:[2,1],dropShipSellers:[],hasAtRetailerNameLowerCase:!1,hasMarginTopAuto:!1,isDotClickable:!1,isDropshipProduct:!1,isProductCardRetailerName:!1,layout:"Carousel",sectionTitleVariation:"TextCenter",shouldEnableBundleComponentAnalytics:!1,shouldRenderCtaCard:!1,showNewProductCardDesign:!1,summaryItemVariation:"TextBelowLeft"},e.exports=f},1725:function(e,t,n){e.exports=n(1726)},1726:function(e,t,n){const i=n(0),o=n(1),{CTACardBody:a,CTACardContent:r,CTACardFooter:s,CTACardIcon:l,CTACardText:d,CTACardWrapper:c}=n(1727),p=({aspectRatio:e,children:t,url:n})=>i.createElement(c,{aspectRatio:e},i.createElement(r,null,i.createElement(a,null,i.createElement(d,{href:n},t)),i.createElement(s,null,i.createElement("a",{href:n},i.createElement(l,null)))));p.propTypes={aspectRatio:o.arrayOf(o.number),children:o.node.isRequired,url:o.string.isRequired},p.defaultProps={aspectRatio:[1,1]},e.exports=p},1727:function(e,t,n){const{default:i}=n(3),{BREAKPOINTS:o}=n(6),{calculateSpacing:a,getColorToken:r,getDecoration:s,minScreen:l}=n(4),{BaseLink:d}=n(10),c=n(119),p=i.div.withConfig({displayName:"CTACardWrapper"})`
  position: relative;
  border-radius: ${({theme:e})=>s(e,"cardRadiusSm")};
  background-color: ${r("colors.discovery.body.brand.background")};
  padding-top: ${({aspectRatio:e})=>e[1]/e[0]*100}%;

  ${l(o.md)} {
    border-radius: ${({theme:e})=>s(e,"cardRadiusMd")};
  }

  ${l(o.lg)} {
    border-radius: ${({theme:e})=>s(e,"cardRadiusLg")};
  }
`,g=i.div.withConfig({displayName:"CTACardContent"})`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  flex-direction: column;
  padding: 0 ${a(3)} ${a(2)}
    ${a(3)};

  ${l(o.lg)} {
    padding: 0 ${a(5)} ${a(5)}
      ${a(5)};
  }
`,u=i.div.withConfig({displayName:"CTACardBody"})`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
`,m=i.div.withConfig({displayName:"CTACardFooter"})`
  height: ${a(6)};
`,h=i(d).withConfig({displayName:"CTACardText"})``;h.defaultProps={colorToken:"colors.discovery.body.brand.heading",typeIdentity:"typography.definitions.discovery.hed-core-secondary"};const b=i(c).withConfig({displayName:"CTACardIcon"})`
  border-radius: 50%;
  background-color: ${r("colors.discovery.body.brand.context-signature")};
  width: ${a(6)};
  height: ${a(6)};
  fill: ${r("colors.discovery.body.brand.context-texture")};
`;e.exports={CTACardBody:u,CTACardContent:g,CTACardFooter:m,CTACardIcon:b,CTACardText:h,CTACardWrapper:p}},1728:function(e,t,n){const{defineMessages:i}=n(2);e.exports=i({ctaMessage:{id:"VersoFilterableSummaryList.CTAMessage",defaultMessage:"See more {groupName} recipes",description:"Message to display in the CTACard"}})},1729:function(e,t,n){const{default:i}=n(3),{BREAKPOINTS:o}=n(6),{minScreen:a,calculateSpacing:r,minMaxScreen:s}=n(4),{cssVariablesGrid:l,applyGridSpacing:d}=n(17),{LabelText:c,ListWrapper:p}=n(150),{CarouselListItem:g}=n(46),{CarouselWrapper:u,ChipWrapper:m}=n(1557),h=i(n(1635)).withConfig({displayName:"FilterableSummaryList"})`
  margin: 0 auto;
  ${({hasToggleGridColor:e})=>!e&&`max-width:${o.fullBleed};\n  ${l()}`}
  ${({hasPadding:e})=>!e&&d("padding")}
  ${g}:first-child {
    box-sizing: content-box;
    ${({hasPadding:e})=>e?`padding-left:${r(8)};\n      ${s(0,o.md)}\n      {  \n        padding-left:${r(3)};  \n      }`:"padding-left: 0;"}
  }
  ${g}:last-child {
    box-sizing: content-box;
    ${({hasPadding:e})=>e?`padding-right:${r(8)};\n    ${s(0,o.md)}\n     { padding-right:${r(3)}; \n    }`:null}
  }
  ${a(o.xxl)} {
    ${m},
    ${u} {
      ${({hasToggleGridColor:e})=>!e&&"margin-left: revert;\n      margin-right: revert;"}
      ${c} ,
      ${p} {
        padding-right: revert;
        padding-left: revert;
      }
      ${g}:first-child {
        ${({hasPadding:e})=>!e&&"padding-left: revert;"}
      }
      ${g}:last-child {
        ${({hasPadding:e})=>!e&&"padding-right: revert;"}
      }
    }
  }
`;e.exports={FilterableSummaryList:h}},178:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({showAllPhotos:{id:"ContentHeader.ShowAllPhotos",defaultMessage:"Show all Photos",description:"Call to action to view entire photo gallery"},readReviews:{id:"ContentHeader.ReadReviews",defaultMessage:"Read Reviews",description:"Call to action to read reviews"}})},1904:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(1905);e.exports=i(o,"AgeGate")},1905:function(e,t,n){const i=n(0),o=n(1),{useIntl:a}=n(2),{trackComponent:r}=n(5),{HiddenCheckbox:s,Overlay:l,Title:d,Text:c,Logo:p,DefaultLogo:g,AgeGateButton:u}=n(1906),{AGE_GATE_ACCEPT:m,AGE_GATE_COOKIE_KEY:h}=n(1716),{hasContentWarnings:b,acceptAgeGatePrompt:y}=n(1907),{getCookie:f}=n(44),C=n(1908).default,v=({hed:e,dek:t,acceptLabel:n,declineLabel:o,logo:v,content:S,cookieExpirationInDays:w,brandContentWarnings:k})=>{i.useEffect(()=>{r("AgeGate")},[]);const{useState:x,useEffect:$}=i,{formatMessage:T}=a(),[E,N]=x(!1);if($(()=>{const e=!(f(h)===m)&&b({content:S,brandContentWarnings:k});N(e)},[S,k]),!E)return null;const L=null!=t?t:T(C.ageGateDekText);return i.createElement(i.Fragment,null,i.createElement(s,{id:"age-gate-check"}),i.createElement(l,{id:"age-gate-overlay",role:"dialog","aria-labelledby":"age-gate-title","aria-describedby":"age-gate-description"},v?i.createElement(p,{src:v,alt:e}):i.createElement(g,{width:96,height:96}),i.createElement(d,{as:"h2",id:"age-gate-title"},null!=e?e:T(C.ageGateHedText)),L&&i.createElement(c,{id:"age-gate-description"},L),i.createElement("label",{htmlFor:"age-gate-check",key:"age-gate-label-accept"},i.createElement(u,{inputKind:"link",onClickHandler:()=>((e,t)=>{e(!1),y(t)})(N,w),key:"age-gate-button-accept",dataAttrs:{"data-test-id":"age-gate-button-accept"},label:n||T(C.ageGateAcceptLabel)})),i.createElement(u,{href:"/",inputKind:"link",key:"age-gate-button-decline",dataAttrs:{"data-test-id":"age-gate-button-decline"},label:o||T(C.ageGateDeclineLabel)})))};v.displayName="AgeGate",v.propTypes={acceptLabel:o.string,brandContentWarnings:o.array,content:o.object.isRequired,cookieExpirationInDays:o.number,declineLabel:o.string,dek:o.string,hed:o.string,logo:o.string},v.defaultProps={brandContentWarnings:["sexual_content","drug_content","death_content","alcohol_content"]},e.exports=v},1906:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AgeGateButton=t.Text=t.Title=t.Logo=t.DefaultLogo=t.Overlay=t.HiddenCheckbox=void 0;const o=i(n(3)),a=n(16),r=n(4),s=i(n(142)),l=n(10),d=i(n(14));t.HiddenCheckbox=o.default.input.withConfig({displayName:"AgeGateCheckbox"})``,t.HiddenCheckbox.defaultProps={hidden:!0,type:"checkbox"},t.Overlay=o.default.div.withConfig({displayName:"AgeGateOverlay"})`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  background: ${r.getColorToken("colors.consumption.lead.inverted.background")};
  padding: 0 1rem;
  width: 100%;
  height: 100%;
  text-align: center;

  ${t.HiddenCheckbox}:checked ~ & {
    display: none;
  }

  @media (min-width: ${a.minThresholds.lg}px) {
    padding: 0 10rem;
  }

  @media (min-width: ${a.minThresholds.xl}px) {
    padding: 0 20rem;
  }
`,t.DefaultLogo=o.default(s.default.AgeGate).withConfig({displayName:"AgeGateDefaultLogo"})`
  margin: 0 0 ${r.calculateSpacing(3)};
  fill: ${({theme:e})=>r.getColorToken(e,"colors.consumption.lead.inverted.heading")};
  width: 96px;
  height: 96px;

  path:first-of-type {
    fill: ${({theme:e})=>r.getColorToken(e,"colors.consumption.lead.inverted.accent")};
  }
`,t.Logo=o.default.img.withConfig({displayName:"AgeGateLogo"})`
  margin: 0 0 ${r.calculateSpacing(3)};
  width: 96px;
  height: 96px;
`,t.Title=o.default(l.BaseText).withConfig({displayName:"AgeGateTitle"})`
  margin: 0 0 ${r.calculateSpacing(2)};

  & + label,
  & + button {
    margin-top: ${r.calculateSpacing(2)};
  }
`,t.Title.defaultProps={colorToken:"colors.consumption.lead.inverted.heading",typeIdentity:"typography.definitions.consumptionEditorial.hed-bulletin"},t.Text=o.default(l.BaseText).withConfig({displayName:"AgeGateText"})`
  margin: 0 0 ${r.calculateSpacing(4)};
`,t.Text.defaultProps={colorToken:"colors.consumption.lead.inverted.heading",typeIdentity:"typography.definitions.consumptionEditorial.description-core"},t.AgeGateButton=o.default(d.default.Primary).withConfig({as:"a",displayName:"AgeGateButton"})`
  margin: 0 0 ${r.calculateSpacing(2)};
`},1907:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.acceptAgeGatePrompt=t.hasContentWarnings=void 0;const i=n(1716),{createCookie:o}=n(44);t.hasContentWarnings=({content:e,brandContentWarnings:t}={})=>{const{contentWarnings:n}=e||{},i=null==t?void 0:t.some(e=>null==n?void 0:n.some(t=>t.slug===e));return Boolean(i)};t.acceptAgeGatePrompt=e=>{document.cookie=o(i.AGE_GATE_COOKIE_KEY,i.AGE_GATE_ACCEPT,{expirationInMs:864e5*(e||i.AGE_GATE_COOKIE_EXPIRATION_IN_DAYS),path:"/"})}},1908:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({ageGateHedText:{id:"AgeGate.HedText",defaultMessage:"Are you 18 or over?",description:"Age Gate title"},ageGateDekText:{id:"AgeGate.DekText",defaultMessage:"This material is intended for people over the age of 18",description:"Age Gate description"},ageGateAcceptLabel:{id:"AgeGate.AcceptLabel",defaultMessage:"I am 18+",description:"Age Gate accept button label"},ageGateDeclineLabel:{id:"AgeGate.DeclineLabel",defaultMessage:"I'm under 18",description:"Age Gate decline button label"}})},1909:function(e,t,n){const{asConfiguredComponent:i}=n(9),{asVariation:o}=n(13),a=n(1910);a.WithAdRail=o(a,"WithAdRail",{adRail:!0}),a.OneColumn=o(a,"OneColumn",{adRail:!1}),a.OneColumnNarrow=o(a,"OneColumnNarrow",{adRail:!1,isNarrowContentWell:!0}),e.exports=i(a,"ChunkedArticleContent")},1910:function(e,t,n){const i=n(1),o=n(0),a=n(8),r=n(19),{PaymentGateway:s}=n(23),l=n(57),d=n(1717),c=n(144),p=n(1911),{ArticlePageDisclaimer:g,ArticlePageChunksContent:u,ArticlePageChunks:m,ArticlePageDisclaimerGrid:h,PaywallInlineBarrierWithWrapperGrid:b}=n(1532),y=({body:e,hasProduct:t,linkList:n,isLinkStackEnabled:i,hasProductLisitingCarousel:c,isAffiliateLinksDisabled:y,hasTopSpacing:f,horizontalRuleStyle:C,interlude:v,multiChunkRailStrategy:S,shouldBlurText:w,shouldUsePersistentAd:k,singleChunkRailStrategy:x,variations:$,hideRecircMostPopular:T,recircMostPopular:E,showFirstRailRecirc:N,hideAutoDisclaimer:L,wordsToDisplay:I,hideAffiliateDisclaimer:B,hideProductDisclaimer:A})=>{const P=$&&$.adRail,D=a("article__body",{"article__body--grid-margins":!P}),R=P?r.NarrowContentWithWideAdRail:l,M=P?r.NarrowContentWithWideAdRail:r.WithMargins;return o.createElement(u,{isNarrowContentWell:$.isNarrowContentWell,shouldBlurText:w},(t||c)&&!y&&!L&&!B&&A&&o.createElement(h,{adRail:P,as:M},o.createElement(g,null)),o.createElement(m,{hasTopSpacing:f,horizontalRuleStyle:C,"data-testid":"ArticlePageChunks"},o.createElement(p,{jsonml:e,adRail:P,linkList:n,isLinkStackEnabled:i,multiChunkRailStrategy:S,interlude:v,FullBleedContentWrapper:R,GeneralContentWrapper:M,recircMostPopular:E,shouldUsePersistentAd:k,singleChunkRailStrategy:x,hideRecircMostPopular:T,showFirstRailRecirc:N,wordsToDisplay:I,hideAffiliateDisclaimer:B})),o.createElement(s,{group:"paywall"},o.createElement(e=>o.createElement(b,{adRail:P,as:M},o.createElement("div",{className:a("body","body__inline-barrier",D)},o.createElement("div",{className:"container container--body"},o.createElement("div",{className:"container--body-inner"},o.createElement(d,Object.assign({},e)))))),null)))};y.propTypes={body:i.array.isRequired,hasProduct:i.bool,hasProductLisitingCarousel:i.bool,hasTopSpacing:i.bool,hideAffiliateDisclaimer:i.bool,hideAutoDisclaimer:i.bool,hideProductDisclaimer:i.bool,hideRecircMostPopular:i.bool,horizontalRuleStyle:i.oneOf(["thin"]),interlude:i.shape(Object.assign(Object.assign({},c.propTypes),{isRailEligible:i.boolean})),isAffiliateLinksDisabled:i.bool,isLinkStackEnabled:i.bool,linkList:i.object,multiChunkRailStrategy:i.oneOf(["alternate"]),recircMostPopular:i.array,shouldBlurText:i.bool,shouldUsePersistentAd:i.bool,showFirstRailRecirc:i.bool,singleChunkRailStrategy:i.oneOf(["split-in-three"]),variations:i.shape({adRail:i.bool,isNarrowContentWell:i.bool}),wordsToDisplay:i.number},y.defaultProps={hasTopSpacing:!0,hideAutoDisclaimer:!1,isAffiliateLinksDisabled:!1,shouldBlurText:!1,variations:{}},y.displayName="ChunkedArticleContent",e.exports=y},1911:function(e,t,n){const i=n(0),o=n(1),a=n(71),{default:r}=n(165),{withRecircContextConsumer:s}=n(158),l=n(39),{PaymentGateway:d}=n(23),c=n(57),p=n(47),{InContent:g}=n(60),u=n(127),m=n(1380),h=n(144),b=s(n(502)),y=n(1912),f=n(140),C=n(476),{showRecircMostPopular:v}=n(1914),S=n(292),{processLinks:w,processCeros:k,processTiktok:x,processSidebarHeadings:$}=n(420),{connectDomain:T}=n(18),E=T("payment"),N=T("featureFlags"),{shouldRenderNothing:L}=n(474),I=n(1390),{ArticlePageChunksGrid:B}=n(1532),{ArticlePageSplitAdRail:A,ArticlePageSplitAdRailContent:P,ArticlePageSplitAdRailTop:D,ArticlePageSplitAdRailMiddle:R,ArticlePageSplitAdRailBottom:M,ArticlePageBodyGridContainer:O,LinkStackArticlePage:H}=n(1532);function _(){return i.createElement("div",null,i.createElement(p,{position:"article-mid-content",secondPosition:"in-content"}),i.createElement(g,null))}const W=new r({a:w,blockquote:({props:e})=>({type:m,props:e}),ceros:k,h2:$,tiktok:x,"cm-unit":()=>({type:_}),"inline-embed":S,"inline-recirc":e=>i.createElement(b,Object.assign({},e,{className:"article-inline-recirc-wrapper"})),"native-ad":e=>i.createElement(d,{group:"ads"},i.createElement(l,Object.assign({},e))),"inline-newsletter":e=>i.createElement(y,Object.assign({},e))});function G(e){return function(e){return Array.isArray(e)&&"string"==typeof e[0]}(e)&&e[1]&&"object"==typeof e[1]&&!Array.isArray(e[1])?e.slice(2):e.slice(1)}function j(e,t){return`${e}-${t}`}class F{constructor({adRail:e,GeneralContentWrapper:t=(()=>null),FullBleedContentWrapper:n=(()=>null),interlude:o,multiChunkRailStrategy:a,recircMostPopular:r,shouldRenderMidContent:s,shouldShowMostPopular:l,shouldUsePersistentAd:d,singleChunkRailStrategy:c,hideRecircMostPopular:p,showFirstRailRecirc:g,linkList:u,isLinkStackEnabled:m}={}){var b;this.isLinkStackEnabled=m,this.linkList=u,this.adRail=e,this.multiChunkRailStrategy=a,this.chunkCount=0,this.shouldRenderMidContent=s,this.shouldUsePersistentAd=d,this.GeneralContentWrapper=t,this.FullBleedContentWrapper=n,this.finalAdSet=!1,this.isSingleChunk=!1,this.singleChunkRailStrategy=c,this.interlude=(null===(b=null==o?void 0:o.strategy)||void 0===b?void 0:b.enabled)&&o.isRailEligible?i.createElement(h,Object.assign({},o,{isRightRail:!0})):null,this.interludeSet=!1,this.mostPopular=l&&!p&&i.createElement(C,{className:"article-recirc-most-popular-wrapper",items:r}),this.showFirstRailRecirc=g}determineAd(){if(this.shouldUsePersistentAd)return this.interludeSet=!0,this.persistentAd();const e=this.stickyAd(this.showFirstRailRecirc);return this.interludeSet=!0,e}showAds(e){if(1===this.chunkCount)return this.determineAd();if(!this.finalAdSet){const t=this.stickyAd(e);return this.interludeSet=!0,t}return null}getAdSlot(e){return i.createElement(i.Fragment,null,i.createElement(d,{group:"ads"},e,i.createElement(l,{position:"rail"})),i.createElement(d,{group:"consumer-marketing"},i.createElement(p,{position:"display-rail"})))}withStickyBox(e,t={}){return e&&i.createElement(u,Object.assign({},t),e)}renderSplitAdRail(){const e=this.withStickyBox(this.getAdSlot(null)),t=this.withStickyBox(this.mostPopular),n=this.withStickyBox(this.getAdSlot(null));return i.createElement(A,{anchorTop:{selector:"[data-testid='ContentHeaderLeadRailAnchor']"},anchorBottom:{selector:".content-bottom-anchor",edge:"bottom"}},i.createElement(P,{className:"split-ad-rail-content"},i.createElement(D,null,e),this.showFirstRailRecirc&&i.createElement(R,{className:"split-ad-rail-middle"},t),i.createElement(M,{className:"split-ad-rail-bottom"},n)))}renderAdRail(e){return this.isSingleChunk&&"split-in-three"===this.singleChunkRailStrategy?this.renderSplitAdRail():this.showAds(e)}closeSmallGroup(e,t,n){if(e.length>0){++this.chunkCount;const o=this.GeneralContentWrapper;return t.concat([i.createElement(B,{adRail:this.adRail,as:o,key:j("small-group",n)},i.createElement(I,{className:"body__container article__body"},W.convert(["div",{className:"body__inner-container"},...e]),"final"===n&&this.isLinkStackEnabled&&i.createElement(H,Object.assign({},this.linkList))),this.adRail&&this.renderAdRail("final"!==n))])}return t}isMultiChunkRailStrategyAlternate(){return"alternate"===this.multiChunkRailStrategy}shouldRenderAd(){return!this.isMultiChunkRailStrategyAlternate()||this.chunkCount%2==1}shouldRenderMostPopular(e){return this.isMultiChunkRailStrategyAlternate()&&e?this.chunkCount%2==0:e}getChunkAdRailContent(e,t){return i.createElement(i.Fragment,null,(this.shouldRenderAd()||!t)&&this.getAdSlot(e),this.shouldRenderMostPopular(t)&&this.mostPopular)}injectInlineRecirc(e){let t=0,n=0;return e.reduce((i,o,a)=>this.isParagraph(o)?(t++,this.isParagraph(e[a+1])&&this.shouldInsertRecirc(t,n)?(t=0,i.concat([o,["inline-recirc",{reelId:++n}]])):i.concat([o])):i.concat([o]),[])}isParagraph(e){return e&&"p"===e[0]}persistentAd(){return i.createElement(f,{anchorTop:{selector:"[data-testid='ContentHeaderLeadRailAnchor']"},anchorBottom:{edge:"bottom"}},this.getChunkAdRailContent(this.interlude,this.showFirstRailRecirc))}shouldInsertRecirc(e,t){return e>=(0===t?5:8)}stickyAd(e){const t=!this.interludeSet&&this.interlude,n=this.getChunkAdRailContent(t,e);return i.createElement(i.Fragment,null,this.withStickyBox(n,{isExpanded:!!t}))}wrapInFullSizeContainer(e,t,n){const o=this.FullBleedContentWrapper;return t.concat([i.createElement(o,{key:j("full",n)},i.createElement(O,{className:"body__grid-container",as:I,shouldDisableMaxWidth:!0,shouldEnableDataJourneyHook:!1},W.convert(e)))])}visit(e){let t=G(e),n=[],o=[];this.isSingleChunk=!t.some(e=>"ad"===e[0]),this.finalAdSet=!1;return t.filter(this.isParagraph).length>10&&(t=this.injectInlineRecirc(t)),t.forEach((e,t)=>{var a,r,s,p;const[g,u,m]=e;if("ad"===g)this.shouldRenderMidContent&&(n=this.closeSmallGroup(o,n,t),o=[],n=n.concat([i.createElement(c,{className:"full-bleed-ad row-mid-content-ad",key:j("ad",t)},i.createElement(d,{group:"ads"},i.createElement(l,{position:"mid-content",shouldDisplayLabel:!0,shouldHoldSpace:!0})))]));else if(!this.adRail&&function(e){const t=e[0],n=e[1]||{},i="inline-embed"===t&&"callout:feature-large"===n.type,o="inline-embed"===t&&"callout:feature-medium"===n.type;return i||o||"ad"===t}(e))n=this.closeSmallGroup(o,n,t),o=[],n=this.wrapInFullSizeContainer(e,n,t);else if("inline-embed"===g&&(null===(r=null===(a=null==u?void 0:u.props)||void 0===a?void 0:a.childTypes)||void 0===r?void 0:r.includes("cartoon"))&&(null==m?void 0:m.length)){const e=m[1];(null===(p=null===(s=null==e?void 0:e.props)||void 0===s?void 0:s.image)||void 0===p?void 0:p.showCTA)&&(o=o.concat([m]))}else o=o.concat([e])}),n=this.closeSmallGroup(o,n,"final"),this.finalAdSet=!0,n}}function V({adRail:e,FullBleedContentWrapper:t,featureFlags:n,GeneralContentWrapper:o,interlude:a,jsonml:r,multiChunkRailStrategy:s,payment:l,recircMostPopular:d,shouldUsePersistentAd:c,singleChunkRailStrategy:p,hideRecircMostPopular:g,showFirstRailRecirc:u,wordsToDisplay:m,linkList:h,isLinkStackEnabled:b}){i.useEffect(()=>{const e=document.querySelector(".split-ad-rail-content"),t=document.querySelector(".split-ad-rail-middle"),n=document.querySelector(".split-ad-rail-bottom");if(e&&t&&n){const i=new IntersectionObserver((e=>t=>{const[n]=t;n.intersectionRatio<e&&n.target.remove()})(.95),{root:e,threshold:.95});return i.observe(t),i.observe(n),()=>{i.disconnect()}}return()=>{}});const y=!L("ads",l,n),f=v(r,m);return new F({adRail:e,FullBleedContentWrapper:t,GeneralContentWrapper:o,interlude:a,multiChunkRailStrategy:s,recircMostPopular:d,shouldRenderMidContent:y,linkList:h,isLinkStackEnabled:b,shouldShowMostPopular:f,shouldUsePersistentAd:c,singleChunkRailStrategy:p,hideRecircMostPopular:g,showFirstRailRecirc:u}).visit(r)}V.defaultProps={multiChunkRailStrategy:"default",singleChunkRailStrategy:"default"},V.propTypes={adRail:o.bool,featureFlags:o.object,FullBleedContentWrapper:o.func,GeneralContentWrapper:o.func,hideRecircMostPopular:o.bool,interlude:o.shape(Object.assign(Object.assign({},h.propTypes),{isRailEligible:o.boolean})),jsonml:o.array.isRequired,multiChunkRailStrategy:o.oneOf(["default","alternate"]),payment:o.object,recircMostPopular:o.array,shouldUsePersistentAd:o.bool,showFirstRailRecirc:o.bool,singleChunkRailStrategy:o.oneOf(["default","split-in-three"]),wordsToDisplay:o.number},e.exports=i.memo(E(N(V)),(function(e,t){return a(e,t)})),e.exports.Chunks=V},1912:function(e,t,n){const i=n(1913),{asConfiguredComponent:o}=n(9);e.exports=o(i,"SlimNewsletterWrapper")},1913:function(e,t,n){const i=n(0),{googleAnalytics:o}=n(12),{connector:a}=n(18),r=n(462),{getNewsletterSubscriptions:s}=n(486);class l extends i.Component{constructor(e){super(e),this.fetchNewsletterSubscriptions=async e=>{try{const t=await s(e);if(200===t.status)return t.newsletterSubscriptions&&t.newsletterSubscriptions.data}catch(e){console.log(e)}return{}},this.state={}}async componentDidMount(){let e,t;const n=this.props.newsletters&&this.props.newsletters.map(e=>e.newsletterId)||[];if(document){e="nl"===new URLSearchParams(document.location.search).get("utm_source")}const{user:i,userPlatform:a}=this.props,{userPlatformProxy:r,xClientID:s}=a||{};if(i.isAuthenticated){const e={amgUUID:i.amguuid,newsletterIds:n,userPlatformProxy:r,xClientID:s,provider:"sailthru"},o=(await this.fetchNewsletterSubscriptions(e)).filter(e=>"SUBSCRIBED"===e.attributes.status).map(e=>e.attributes.newsletterId);t=n.find(e=>!o.includes(e))}else t=n[0];this.props.isNewsletterSlim&&!e&&t&&o.emitGoogleTrackingEvent("newsletter-loaded-inlineslim",{newslettterId:t}),this.setState(Object.assign(Object.assign({},this.state),{isSourceNewsletter:e,newsletterToShow:t}))}render(){let e;const{isNewsletterSlim:t,isNewsletterAggressive:n,hasSlimAlternateStyle:o,newsletterType:a,patternType:s,showToggleForLoggedInUser:l,user:d}=this.props;("aggressive-newsletter"===a&&n||"slim-newsletter"===a&&t)&&(e=!0);const{isSourceNewsletter:c,newsletterToShow:p}=this.state,g=this.props.newsletters&&this.props.newsletters.find(e=>e.newsletterId===p);return!c&&e&&g?i.createElement(r,Object.assign({},g,{enableSlimUnitToggle:l&&(null==d?void 0:d.isAuthenticated)&&(null==d?void 0:d.email),hasSlimAlternateStyle:o,newsletterType:a,patternType:s,userEmail:(null==d?void 0:d.isAuthenticated)&&(null==d?void 0:d.email)})):null}}l.propTypes=r.propTypes,l.defaultProps=r.defaultProps,l.displayName="SlimNewsletterWrapper",e.exports=a(l,{keysToPluck:["user","userPlatform"]})},1914:function(e,t,n){const{showRecircMostPopular:i}=n(1915);e.exports={showRecircMostPopular:i}},1915:function(e,t){const n=(e=[])=>Array.isArray(e)&&e.reduce((e,t,i)=>Array.isArray(t)&&t.length>1?e+n(t):"string"==typeof t&&0!==i?e+t.trim().replace(/\s+/gi," ").split(" ").length:e,0);e.exports={showRecircMostPopular:(e,t)=>n(e)>(t||200)}},1916:function(e,t,n){const i=n(22),o=n(1917),a=n(1918),r=n(1919),{connectDomain:s}=n(18),{withIncognitoDetection:l}=n(171),d=s("user"),c=s("paywall"),p=i([d,s("payment"),c,l]);e.exports={PaywallCollaborator:p(o),withArticleTruncation:a,withGalleryTruncation:r}},1917:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};const o=n(1),a=n(0),r=n(496),s=n(497),{trackComponent:l}=n(5),d=e=>{a.useEffect(()=>{l("PaywallCollaborator")},[]);const{component:t,name:n,paywall:o}=e,d=i(e,["component","name","paywall"]),c=r[o.strategy],p=o.strategy&&c,g=c&&c.names.includes(n);return p&&g?a.createElement(t,Object.assign({},s.execute(c,e))):a.createElement(t,Object.assign({},d))};d.propTypes={component:o.func.isRequired,name:o.string.isRequired,payment:o.object.isRequired,paywall:o.object.isRequired},e.exports=d},1918:function(e,t,n){const i=n(1),o=n(0);e.exports=(e,t)=>{const n=e.displayName||e.name,a=e=>"object"==typeof e&&"p"===e[0],r=(e,t)=>e.filter((n,i)=>((e,t)=>e.slice(0,t).filter(a).length)(e,i)<t),s=n=>{const{[t]:i,shouldTruncate:a,paywall:{gateway:s={},paragraphLimit:l}={}}=n,d=i&&(s.shouldTruncate||a)&&(s.paragraphLimit>=0||l>=0);return o.createElement(e,Object.assign({},n,{[t]:d?r(i,s.paragraphLimit||l):i}))};return s.propTypes={[t]:i.array.isRequired,paywall:i.shape({gateway:i.shape({paragraphLimit:i.number,shouldTruncate:i.bool}),paragraphLimit:i.number}),shouldTruncate:i.bool},s.displayName=`withArticleTruncation(${n})`,s}},1919:function(e,t,n){const i=n(1),o=n(0);e.exports=(e,t)=>{const n=e.displayName||e.name,a=(e,t)=>e.map(n=>n.filter(n=>((e,t)=>e.flat().indexOf(t))(e,n)<t)).filter((e,t)=>e.length>0||0===t),r=n=>{const{[t]:i,shouldTruncate:r,paywall:{gateway:s={},gallerySlideLimit:l}={}}=n,d=i&&(s.shouldTruncate||r)&&(s.gallerySlideLimit>=0||l>=0);return o.createElement(e,Object.assign({},n,{[t]:d?a(i,s.gallerySlideLimit||l):i}))};return r.propTypes={[t]:i.array.isRequired,paywall:i.shape({gateway:i.shape({gallerySlideLimit:i.number,shouldTruncate:i.bool}),gallerySlideLimit:i.number}).isRequired,shouldTruncate:i.bool},r.displayName=`withGalleryTruncation(${n})`,r}},1920:function(e,t,n){e.exports={BeopScript:n(1921)}},1921:function(e,t,n){const i=n(0),o=n(1),{trackComponent:a}=n(5),r=({accountId:e})=>(i.useEffect(()=>{a("BeopScript")},[]),i.createElement(i.Fragment,null,i.createElement("script",{id:"beop-script",type:"text/javascript",dangerouslySetInnerHTML:{__html:`window.beOpAsyncInit = function () {\n                      window.BeOpSDK.init({\n                        account: '${e}'\n                      });\n                      window.BeOpSDK.watch();\n                  };`}}),i.createElement("script",{id:"beop-sdk",async:!0,src:"https://widget.beop.io/sdk.js"})));r.propTypes={accountId:o.string.isRequired},e.exports=r},1922:function(e,t,n){e.exports=n(1923)},1923:function(e,t,n){const i=n(1720);e.exports=i},217:function(e,t,n){const i=n(3).default,{BaseLink:o,BaseText:a}=n(10),{calculateSpacing:r,getLinkStyles:s,getTypographyStyles:l,getColorStyles:d,getInputFieldStyles:c}=n(4),p=n(30),g=i.div.withConfig({displayName:"GroupedNavigationWrapper"})`
  padding-top: ${r(4)};
  height: 100%;

  ${({hasFilter:e})=>e&&`padding-top: ${r(2)};`}

  .navigation__heading {
    ${({theme:e})=>l(e,"typography.definitions.foundation.title-primary")};
    margin: 0;
    line-height: normal;
    ${({theme:e})=>d(e,"color","colors.foundation.expanded-utility.nav-link.default")};
  }

  .navigation__list-item {
    white-space: normal;
  }

  .content-divider {
    display: block;
    margin-bottom: ${r(2)};
    border-bottom-width: ${r(.5)};
    border-bottom-style: solid;
    ${({theme:e})=>d(e,"border-bottom-color","colors.discovery.lead.secondary.accent")};
    padding-top: ${r(1)};
    width: ${r(2)};
  }

  .grouped-navigation__link {
    ${({theme:e})=>s(e,"colors.foundation.expanded-utility.nav-link.default","colors.foundation.expanded-utility.nav-link.hover","navigation")}

    &.link--primary {
      ${({theme:e})=>l(e,"typography.definitions.foundation.link-primary")};
    }

    &.link--secondary {
      ${({theme:e})=>l(e,"typography.definitions.foundation.link-secondary")};
    }
  }
`,u=i.div.withConfig({displayName:"GroupedNavigationFilter"})`
  position: static;
  border-width: 0 0 1px;
  border-style: solid;
  ${({theme:e})=>d(e,"color","colors.discovery.body.white.divider")};
  width: calc(100% - 1.25rem);
  height: 60px;

  .icon {
    position: absolute;
    top: 10px;
    right: 0;
    pointer-events: none;
  }
`,m=i.div.withConfig({displayName:"GroupedNavigationFilterContent"})`
  position: relative;
`,h=i(a).withConfig({displayName:"GroupedNavigationFilterInput"})`
  ${({theme:e})=>c(e,"normal","background")};
  ${({theme:e})=>c(e,"normal","text")};
  border: none;
  width: 100%;
  height: ${r(6.2)};
`;h.defaultProps={as:"input",typeIdentity:"typography.definitions.foundation.link-secondary"};const b=i.div.withConfig({displayName:"GroupedNavigationContent"})`
  display: flex;
  height: 100%
    ${({hasFilter:e})=>e&&`\n      padding-top: ${r(4)};\n      height: calc(100% - 60px);\n  `};
`,y=i.div.withConfig({displayName:"GroupedNavigationLinks"})`
  flex: 1;
  height: 100%;
  overflow-y: auto;

  && li {
    padding-bottom: ${r(2)};

    &.link--primary {
      ${({theme:e})=>l(e,"typography.definitions.foundation.link-primary")};
    }

    &.link--secondary {
      ${({theme:e})=>l(e,"typography.definitions.foundation.link-secondary")};
    }
  }
`,f=i(p.Vertical).withConfig({displayName:"GroupedNavigationGroup"})`
  padding-bottom: ${r(5)};
`,C=i.div.withConfig({displayName:"GroupedNavigationIndex"})`
  position: static;
  padding-right: ${r(1)};
  overflow-y: auto;
`,v=i(a).withConfig({displayName:"AtoZIndexWrapper"})`
  width: ${r(3)};
  text-align: center;
`;v.defaultProps={as:"nav"};const S=i(a).withConfig({displayName:"AtoZIndexList"})`
  margin-top: 0;
  padding: 0;
  list-style: none;
`;S.defaultProps={as:"ul"};const w=i(o).withConfig({displayName:"AtoZIndexLink"})`
  display: block;
  background: none;
  padding-top: ${r(.25)};
  padding-bottom: ${r(.25)};
  width: 100%;
`;w.defaultProps={colorSecondaryLinkToken:"colors.foundation.expanded-utility.nav-link.hover",colorStaticLinkToken:"colors.foundation.expanded-utility.nav-link.default",colorToken:"colors.foundation.expanded-utility.nav-link.default",linkStyle:"navigation",typeToken:"typography.definitions.foundation.link-secondary"};const k=i(a).withConfig({displayName:"AtoZIndexText"})`
  margin: 0;
  padding-top: ${r(.25)};
  padding-bottom: ${r(.25)};
`;k.defaultProps={as:"li",colorToken:"colors.foundation.expanded-utility.nav-link.default",typeIdentity:"typography.definitions.foundation.link-secondary"},e.exports={GroupedNavigationWrapper:g,GroupedNavigationFilter:u,GroupedNavigationFilterContent:m,GroupedNavigationFilterInput:h,GroupedNavigationContent:b,GroupedNavigationLinks:y,GroupedNavigationGroup:f,GroupedNavigationIndex:C,AtoZIndexWrapper:v,AtoZIndexList:S,AtoZIndexLink:w,AtoZIndexText:k}},223:function(e,t,n){const i=n(8),o=n(1),a=n(0),{useIntl:r}=n(2),s=n(89),{storyVideoPosition:l}=n(233),d=n(229),c=n(235),p=n(11),g=n(20),{transformLegacySources:u}=n(94),m=n(178).default,{ContentHeaderLeadAsset:h,ContentHeaderResponsiveAsset:b,ContentHeaderLeadAssetContent:y,ContentHeaderLeadAssetCaption:f,ContentHeaderLeadAssetContentMedia:C,ContentHeaderLedeLightboxButton:v,ContentHeaderLeadRailAnchor:S,ContentHeaderLeadContentFullWidth:w,ContentHeaderLeadContentCaptionCredit:k,ContentHeaderLeadAssetAwards:x}=n(105),{useState:$,Fragment:T}=a,E="landscape",N="portrait",L=({awards:e,className:t,captionWidth:n,containerTheme:o,lede:p,mediaWidth:L,shouldRenderRailAnchor:I,showFullWidthLeadImage:B,socialIcons:A,hasLightboxButton:P,hasStaticPositionedAward:D,hasInvertedLedeBackground:R,hideLedeCaption:M})=>{const[O,H]=$((e=>{var t;const n=null===(t=null==e?void 0:e.masterAspectRatio)||void 0===t?void 0:t.split(":");return(null==e?void 0:e.restrictCropping)&&2===(null==n?void 0:n.length)&&Number(n[0])/Number(n[1])<=1?N:E})(p)),{formatMessage:_}=r(),W=({width:e,height:t})=>{e/t<=1&&H(N)},G=u(p),j="cnevideo"===p.modelName,F="gallery"===p.modelName,V="clip"===p.modelName,U=!M&&(p.caption&&p.caption.trim()||p.credit&&p.credit.trim()),z=a.createElement(f,{dangerousCaptionText:p.caption,dangerousCredit:p.credit,mediaWidth:L});return a.createElement(T,null,a.createElement(h,{className:i("lead-asset",t),mediaWidth:L,containerTheme:o,ledeContentType:p.contentType,ledeAssetOrientation:O,hasInvertedLedeBackground:R,"data-testid":"ContentHeaderLeadAsset"},a.createElement(y,null,a.createElement(C,{ledeContentType:p.contentType,showFullWidthLeadImage:B,mediaWidth:L,className:"lead-asset__content__"+p.contentType},!j&&!F&&!V&&a.createElement(T,null,e&&!D&&a.createElement(x,{awards:e,hasStaticPositionedAward:D}),a.createElement(b,Object.assign({},G,{onAssetLoaded:W,shouldRestrictCropping:null==p?void 0:p.restrictCropping,masterAspectRatio:null==p?void 0:p.masterAspectRatio,shouldHoldImageSpace:!0,mediaWidth:L,"data-testid":"assetMedia"}))),j&&p.scriptEmbedUrl&&a.createElement(s,{shouldAutoplay:!0,scriptUrl:p.scriptEmbedUrl,shouldHaveTeaser:!0,videoEmbedPosition:l}),F&&a.createElement(d,Object.assign({},p,{showNoAdsFromParent:!0})),A&&a.createElement(g.Overlay,{links:A.links}),V&&a.createElement(b,Object.assign({},G,{onAssetLoaded:W,shouldRestrictCropping:null==p?void 0:p.restrictCropping,masterAspectRatio:null==p?void 0:p.masterAspectRatio,shouldHoldImageSpace:!0,mediaWidth:L,"data-testid":"assetMedia"})),P&&a.createElement(v,{onClickHandler:()=>{document.querySelector(".responsive-image--expandable").click()},ButtonIcon:()=>a.createElement(c,null),hasEnableIcon:!0,btnStyle:"text",iconPosition:"before",inputKind:"button",isStaticText:!0,label:_(m.showAllPhotos),shouldRenderCaption:U}),U&&"fullbleed"!==n&&z,e&&D&&a.createElement(x,{awards:e,hasStaticPositionedAward:D}))),I&&a.createElement(S,{"data-testid":"ContentHeaderLeadRailAnchor"})),U&&"fullbleed"===n&&a.createElement(w,null,a.createElement(k,null,z)))};L.propTypes={awards:o.array,captionWidth:o.oneOf(["standard","fullbleed"]),className:o.string,containerTheme:o.oneOf(["standard","inverted","special"]),hasInvertedLedeBackground:o.bool,hasLightboxButton:o.bool,hasStaticPositionedAward:o.bool,hideLedeCaption:o.bool,lede:o.oneOfType([o.shape(p.propTypes),o.shape(s.propTypes)]).isRequired,mediaWidth:o.oneOf(["small","smallrule","grid","fullbleed"]),shouldRenderRailAnchor:o.bool,showFullWidthLeadImage:o.bool,socialIcons:o.shape(g.propTypes)},L.defaultProps={captionWidth:"standard",hasStaticPositionedAward:!1,hideLedeCaption:!1},e.exports=L,e.exports.transformLegacySources=u},250:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(274);e.exports=i(o,"ToggleChip")},2603:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(2604));i(n(149)).default(o.default)},2604:function(e,t,n){const i=n(2605),{asConfiguredComponent:o}=n(9);e.exports=o(i,"ArticlePage")},2605:function(e,t,n){const i=n(8),o=n(123),a=n(15),r=n(40),s=n(1),l=n(0),{injectIntl:d}=n(2),c=n(2606).default,{I18nProvider:p}=n(508),g=n(1904),u=n(1541),m=n(2607),h=n(1909),{connector:b}=n(18),y=n(436),f=n(1456),{googleAnalytics:C}=n(12),v=n(19),{PaywallCollaborator:S,withArticleTruncation:w}=n(1916),{InlineBarrier:k}=n(60),x=n(2609),$=n(1630),T=n(144),{withLightbox:E}=n(1404),N=n(57),{Disclaimer:L}=n(95),{BeopScript:I}=n(1920),{trackComponent:B}=n(5);const A=n(2613),P=n(444),D=n(1585),R=n(462),M=n(2617),{asConfiguredComponent:O}=n(9),H=n(485),_=n(1922),W=n(437),{getNewsletterSubscriptions:G}=n(486),{ArticlePageBase:j,ArticlePageGlobalStyle:F,ArticlePageLedeBackground:V,ArticlePageContentBackGround:U,ArticlePageBodyMobileTruncatedBtn:z,ArticlePageContentFooterGrid:q,ContentWrapperGrid:K}=n(1532),Y=n(1723),{MultiPackageRow:Z}=n(1589),{getOverrideBehaviour:X}=n(427);class J extends l.Component{constructor(e){super(e),this.onHandleScroll=()=>{const e=window.scrollY<=this.pageContentEl.current.offsetTop+100;e!==this.state.hideNav&&this.setState({hideNav:e})},this.onTruncationDismiss=()=>{this.setState({isMobileTruncated:!this.state.isMobileTruncated}),C.emitUniqueGoogleTrackingEvent("article-read-more")},this.fetchNewsletterSubscriptions=async e=>{try{const t=await G(e);if(200===t.status){const e=this.props.article.newsletterModules.filter(e=>e.priority).sort((e,t)=>e.priority-t.priority).map(e=>e.newsletterId),n=this.props.article.newsletter.newsletterId,i=t.newsletterSubscriptions.data.filter(e=>"SUBSCRIBED"===e.attributes.status).map(e=>e.attributes.newsletterId);if(i.length){const t=e.filter(e=>!i.includes(e)),o=this.props.article.newsletterModules.find(e=>e.newsletterId===t[0]);i.includes(n)&&this.setState({newsletterData:Object.assign(Object.assign({},this.state.newsletterData),o)})}}}catch(e){console.log(e)}return{}},this.state={hideNav:this.props.article.headerProps.hasContentHeaderLogo,isMobileTruncated:!1,newsletterData:this.props.article.newsletter},this.pageContentEl=l.createRef();const t=e.hasLightbox?E(h,e.article.lightboxImages,e.hasSlideShow):h;this.TruncatedChunkedArticleContent=w(t,"body")}componentDidMount(){var e;if(B("ArticlePage"),this.props.user.isAuthenticated&&this.props.hasDynamicNewsletterSignup&&(null===(e=this.props.article.newsletterModules)||void 0===e?void 0:e.length)){const e=this.props.article.newsletterModules.map(e=>e.newsletterId).toString(),t={amgUUID:this.props.user.amguuid,newsletterIds:e,userPlatformProxy:this.props.userPlatform.userPlatformProxy,provider:"sailthru",xClientID:this.props.userPlatform.xClientID};this.fetchNewsletterSubscriptions(t)}const{hasTruncationOnMobile:t}=this.props.article;if(t?this.setState({isMobileTruncated:!0}):this.setState({isMobileTruncated:!1}),this.props.article.headerProps.hasContentHeaderLogo){this.setState({hideNav:!0});const e=r(this.onHandleScroll,300);window.addEventListener("scroll",e)}const n="header"===a(this.props.article.interactiveOverride,"behavior"),i=a(this.props.componentConfig,"BasePage.settings.showNavWithHeaderOverride"),o=n&&!i;window.sessionStorage.setItem("nav_invisible",o)}componentWillUnmount(){window.removeEventListener("scroll",this.onHandleScroll),window.sessionStorage.removeItem("nav_invisible")}render(){const{article:{id:e,body:t,channelCloudData:n,contentWarnings:r,affiliateDisclaimer:s,contributorSpotLightProps:d,hideAffiliateDisclaimer:h,hasAffiliateLinks:b,hasEventBannerHidden:C,hideProductDisclaimer:w,channelMap:T,coralComments:E,hasNewsletterInBody:B,hasProduct:G,hasProductLisitingCarousel:J,hasTruncationOnMobile:Q,headerProps:ee,hideAutoDisclaimer:te,hideContributorBio:ne,hideRecircList:ie,hideRecircMostPopular:oe,hierarchy:ae,shouldReplaceOutbrainWithVMG:re,interactiveOverride:se,isAffiliateLinksDisabled:le,lang:de,langTranslations:ce,recommended:pe={},customHeading:ge={},recircs:ue=[],recircMostPopular:me,recircRelated:he,relatedVideo:be,interlude:ye,isHeroAdVisible:fe,isLicensedPartner:Ce,licensedPartnerLink:ve,magazineDisclaimer:Se,paddingTop:we,tagCloud:ke,newsletter:xe,shouldUsePersistentAd:$e,showAgeGate:Te,showBookmark:Ee,showBreadcrumbTrail:Ne,showHotelRecirc:Le,signageConfig:Ie,isLinkStackEnabled:Be,shouldShowFooterNewsletter:Ae,shouldPrioritizeSeriesPagination:Pe,savingsUnitedCoupons:De=[]},showFirstRailRecirc:Re,attributes:Me,className:Oe,componentConfig:He,shouldCenterDisclaimer:_e,shouldHideBaseTopPadding:We,shouldHideSeriesNavigation:Ge,shouldHideSeriesRecirc:je,shouldInheritDropcapColor:Fe,showLinkStackInsideContentBody:Ve,featureFlags:Ue,hasLightbox:ze,hasChannelNavigation:qe,showContributorSpotlight:Ke,cartoonVariation:Ye,hasRecircDriver:Ze,linkList:Xe,related:Je,metadataVideo:Qe,outbrain:et,taboola:tt,productCarousel:nt,user:it,hasNewsletterForABTest:ot,intl:at,xlargePaddingTop:rt,articleVariationForXlargePaddingTop:st,beOp:lt,hasDynamicDisclaimer:dt}=this.props,{hideNav:ct}=this.state,pt=!!ot||B,{hasContentHeaderLogo:gt}=ee;gt&&(()=>{const e=a(He,"ContentHeader.settings");o(He,"ContentHeader.variation","TextOverlayWithLogo"),o(He,"ContentHeader.settings",Object.assign(Object.assign({},e),{showLogo:!0,hideContributors:!0,hidePublishDate:!0,hideRubric:!0,hideShareButtons:!0}))})();const ut=ne?void 0:ee.contributors,{hasNativeShareButton:mt,hasNewsletterOnPageTop:ht,hasNewsletterWithoutWrapper:bt,shouldEnableNativeShareOnDesktop:yt,shouldRemoveBackgroundColor:ft}=Ue,Ct=function(e){return"WithAdRail"===a(e,"ChunkedArticleContent.variation")?v.NarrowContentWithWideAdRail:v.WithMargins}(He),vt="OneColumnNarrow"===a(He,"ChunkedArticleContent.variation"),St=v.DynamicGrid({startColumn:2,endColumn:12}),wt=_e?L.TextCenterNoTopRule:L,kt=ue.map((e,t)=>{const n=O(H,e.displayName),i=e.heading||"",{results:o,destinationPage:a,location:r,recommendedClickout:s,recommendedType:d}=e;return Ze&&a?l.createElement(_,{key:"SummaryCollectionSplitColumns"+t,recommendedItems:{items:o,recommendedType:d,recommendedClickout:s},guideItem:[a],location:r,shouldAppendReadMoreLinkForDek:!0}):l.createElement(W,{key:"ConnectedErrorBoundary"+t},l.createElement(n,{related:e.related,heading:i}))}),xt=a(He,"ContentHeader.variation")===st&&rt?rt:we,$t=(null==lt?void 0:lt.accountID)||"",Tt=(null==lt?void 0:lt.isEnabled)||!1,Et=qe&&l.createElement(P,null),Nt="WithAdRail"===a(He,"ChunkedArticleContent.variation"),Lt=({children:e})=>l.createElement(K,{isadRail:Nt,as:Ct},l.createElement("div",{className:"body body__container"},l.createElement("div",{className:"container container--body"},l.createElement("div",{className:"container--body-inner"},e)))),It="articleheader"===X(se),Bt=a(ee,"sponsoredContentHeaderProps");return l.createElement(j,{additionalNavigation:Et,attributes:Me,channelMap:T,className:i("page--article",Oe),featureFlags:Ue,hideNav:ct,hasContentHeaderLogo:gt,hasEventBannerHidden:C,hasFooterAdsMargins:!0,interactiveOverride:se,isHeroAdVisible:fe,hasBaseAds:!0,user:it,lang:de,recommended:pe,customHeading:ge,categoriesMap:null==ke?void 0:ke.tags,shouldHideBaseTopPadding:We,shouldPrioritizeSeriesPagination:Pe},Tt&&l.createElement(I,{accountId:$t}),l.createElement(p,{locale:de,translations:ce},Ee&&l.createElement(D,null),l.createElement(l.Fragment,null,b&&s&&!h&&!w&&l.createElement(N,null,l.createElement(St,null,l.createElement(wt,{disclaimerHtml:s,hasTopRule:!1})))),Ne&&l.createElement(u,{hierarchy:ae,shouldRemoveBackgroundColor:ft}),l.createElement("article",{className:i("article main-content",{"article--inherited-dropcaps":Fe}),lang:de},ht&&xe&&l.createElement(R,Object.assign({},xe,{position:"article-page-top"})),ee.sponsoredContentHeaderProps&&l.createElement($,Object.assign({},ee.sponsoredContentHeaderProps,{className:"light-theme"})),It?l.createElement("div",{className:"interactive-override-container interactive-override-container--content_header",dangerouslySetInnerHTML:{__html:se.markup}}):l.createElement(V,{ref:this.pageContentEl},l.createElement(f,Object.assign({},ee,{hasNativeShareButton:mt,shouldEnableNativeShareOnDesktop:yt,className:"article__content-header",hasLightbox:ze,stickySocialAnchorBottom:{selector:".content-bottom-anchor",edge:"bottom"},stickySocialAnchorTop:{selector:".body",edge:"top"},interactiveOverride:se,metadataVideo:Qe,showBreadCrumb:Ne}))),!Ge&&l.createElement(A,{className:"article__series-navigation"}),l.createElement(U,{togglePaddingTop:xt,isMobileTruncated:this.state.isMobileTruncated,cartoonVariation:Ye,"data-attribute-verso-pattern":"article-body"},Q&&this.state.isMobileTruncated&&l.createElement(z,{inputKind:"button",label:at.formatMessage(c.truncatedButtonLabel),onClickHandler:this.onTruncationDismiss}),a(He,"ChannelCloud.settings.shouldShowChannelCloud",!1)&&(null===(At=null==n?void 0:n.channels)||void 0===At?void 0:At.length)>0&&l.createElement(v.ContentWithAdRailNarrow,null,l.createElement("div",null,l.createElement(M,Object.assign({},n,a(He,"ChannelCloud.settings"))))),t&&l.createElement(S,{body:t,linkList:Xe,isLinkStackEnabled:Be&&Ve,component:this.TruncatedChunkedArticleContent,contributors:ut,hasProduct:G,hasProductLisitingCarousel:J,hasTopSpacing:!!ee.lede,interlude:ye,isAffiliateLinksDisabled:le,name:"chunked-article-content",shouldUsePersistentAd:$e,hideRecircMostPopular:oe,recircMostPopular:me,showFirstRailRecirc:Re,hideAutoDisclaimer:te,hideAffiliateDisclaimer:h,hideProductDisclaimer:w}),t&&l.createElement(Lt,null,l.createElement(k,null))),!je&&l.createElement(x,{ContentWrapper:Ct})),Tt&&l.createElement(Lt,null,l.createElement("div",{className:"BeOpWidget"})),Object.keys(nt).length>0&&l.createElement(Z,{key:"articleCarouselProduct",dataJourneyHook:"row-content"},l.createElement(Y,Object.assign({},nt,{copilotId:e}))),l.createElement(q,{as:y,className:i({"content-footer--mobile-truncated":this.state.isMobileTruncated}),channelMap:T,consumerMarketing:{position:"article-footer"},ContentWrapper:Ct,contributors:ut,contributorSpotlight:d,coralComments:E,hideContributorBio:ne,showContributorSpotlight:Ke,hideRecircList:ie,hasNewsletterWithoutWrapper:bt,isLicensedPartner:Ce,isLinkStackEnabled:Be&&!Ve,isNarrow:vt,licensedPartnerLink:ve,linkList:Xe,magazineDisclaimer:Se,newsletter:it.isAuthenticated?this.state.newsletterData:xe,outbrain:et,taboola:tt,recircs:ue,recircListElements:kt,related:Je,recircRelated:he,relatedVideo:be,showNewsletter:Ae||!pt,showHotelRecirc:Le,signageConfig:Ie,tagCloud:ke,shouldReplaceOutbrainWithVMG:re,savingsUnitedCoupons:De,sponsoredProps:Bt,hasDynamicDisclaimer:dt}),Te&&l.createElement(g,{content:{contentWarnings:r}}),!it.isAuthenticated&&it.hasUserAuthCheck&&l.createElement(m,{as:"document",hint:"prefetch",href:"/account/sign-in"})),l.createElement(F,null));var At}}J.propTypes={article:s.shape({body:s.array,channelCloudData:s.object,affiliateDisclaimer:s.string,contributorSpotLightProps:s.object,hideProductDisclaimer:s.bool,hideAffiliateDisclaimer:s.boolean,hasAffiliateLinks:s.boolean,channelMap:s.object,coralComments:s.shape({enableComments:s.bool,coralHostName:s.string}),contentWarnings:s.array,customHeading:s.object,hasEventBannerHidden:s.bool,hasNewsletterInBody:s.bool,hasProduct:s.bool,hasProductLisitingCarousel:s.bool,hasTruncationOnMobile:s.bool,headerProps:s.object.isRequired,hideAutoDisclaimer:s.bool,hideContributorBio:s.bool,hideRecircList:s.bool,hideRecircMostPopular:s.bool,hierarchy:s.array,id:s.string,interactiveOverride:s.shape({markup:s.string,behavior:s.string}),interlude:s.shape(Object.assign(Object.assign({},T.propTypes),{isRailEligible:s.boolean})),isAffiliateLinksDisabled:s.bool,isHeroAdVisible:s.bool.isRequired,isLicensedPartner:s.bool,isLinkStackEnabled:s.bool,lang:s.string,langTranslations:s.object,licensedPartnerLink:s.string,lightboxImages:s.array.isRequired,magazineDisclaimer:s.shape({issueDate:s.string.isRequired,issueLink:s.string.isRequired,originalHed:s.string}),newsletter:s.object,newsletterModules:s.array,paddingTop:s.oneOf(["large"]),recommended:s.object,recircs:s.array,recircMostPopular:s.array,recircRelated:s.array,relatedVideo:s.shape({brand:s.string,related:s.any,useRelatedVideo:s.bool}),savingsUnitedCoupons:s.array,shouldPrioritizeSeriesPagination:s.bool,shouldShowFooterNewsletter:s.bool,shouldUsePersistentAd:s.bool,shouldReplaceOutbrainWithVMG:s.bool,showAgeGate:s.bool,showBookmark:s.bool,showBreadcrumbTrail:s.bool,showHotelRecirc:s.bool,signageConfig:s.object,tagCloud:s.shape({tags:s.arrayOf(s.shape({tag:s.string.isRequired,url:s.string}))})}).isRequired,articleVariationForXlargePaddingTop:s.string,attributes:s.object,beOp:s.shape({accountID:s.string,isEnabled:s.boolean}),cartoonVariation:s.oneOf(["default","card"]),className:s.string,componentConfig:s.object,featureFlags:s.object,hasChannelNavigation:s.bool,hasDynamicDisclaimer:s.bool,hasDynamicNewsletterSignup:s.bool,hasLightbox:s.bool,hasNewsletterForABTest:s.bool,hasRecircDriver:s.bool,hasSlideShow:s.bool,hideNav:s.bool,intl:s.object,linkList:s.object,metadataVideo:s.shape({isLive:s.bool,premiereDate:s.string,series:s.string,videoLength:s.number,premiereGap:s.number}),outbrain:s.shape({canonicalUrl:s.string.isRequired,shouldDisplayAboveRecircList:s.bool,template:s.string.isRequired,widgetId:s.string}),productCarousel:s.object,related:s.array,shouldCenterDisclaimer:s.bool,shouldHideBaseTopPadding:s.bool,shouldHideSeriesNavigation:s.bool,shouldHideSeriesRecirc:s.bool,shouldInheritDropcapColor:s.bool,showContributorSpotlight:s.bool,showFirstRailRecirc:s.bool,showLinkStackInsideContentBody:s.bool,taboola:s.shape({publisherId:s.string.isRequired}),user:s.object,userPlatform:s.object,xlargePaddingTop:s.string},J.defaultProps={cartoonVariation:"default",hasDynamicNewsletterSignup:!1,hasLightbox:!1,hasSlideShow:!0,metadataVideo:{},productCarousel:{},related:[],shouldCenterDisclaimer:!1,shouldHideSeriesNavigation:!0,shouldHideSeriesRecirc:!0,shouldInheritDropcapColor:!1,showLinkStackInsideContentBody:!1},J.displayName="ArticlePage",e.exports=b(d(J),{keysToPluck:["article","beOp","componentConfig","featureFlags","linkList","metadataVideo","outbrain","productCarousel","related","showFirstRailRecirc","taboola","user","userPlatform"]})},2606:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({truncatedButtonLabel:{id:"ArticlePage.TruncatedButtonLabel",defaultMessage:"Read Full Story",description:"ArticlePage component truncated button label"}})},2607:function(e,t,n){e.exports=n(2608)},2608:function(e,t,n){const i=n(0),{trackComponent:o}=n(5);class a extends i.PureComponent{constructor(){super(...arguments),this.writeResourceHintLink=e=>{const{as:t,hint:n,href:i}=e,o=document.createElement("link");o.as=t,o.href=i,o.rel=n,document.head.appendChild(o)}}componentDidMount(){o("ResourceHint"),this.props&&this.writeResourceHintLink(this.props)}render(){return i.createElement(i.Fragment,null)}}e.exports=a},2609:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(2610);e.exports=i(o,"SeriesRecirc")},261:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(419);e.exports=i(o,"ToggleChipList")},2610:function(e,t,n){const i=n(1),o=n(0),{useIntl:a}=n(2),{useInView:r}=n(75),{connector:s}=n(18),l=n(11),d=n(19),c=n(2611).default,{trackComponent:p}=n(5),{googleAnalytics:g}=n(12),{SeriesRecircAsset:u,SeriesRecircContainer:m,SeriesRecircContent:h,SeriesRecircDek:b,SeriesPromoHed:y,SeriesRecircReadMoreCta:f,SeriesRecircReadMoreCtaMobile:C,SeriesRecircTextContainer:v}=n(2612),S={"Read more":c.readMoreDefault,"Read next":c.readNext},w=({ContentWrapper:e,readMoreCTA:t,seriesData:n})=>{const{formatMessage:i}=a();o.useEffect(()=>{p("SeriesRecirc")},[]);const s=(({links:e})=>{let t;for(let n=0;n<e.length;n++){const{isCurrent:i}=e[n];if(i){for(let i=n+1;i<e.length;i++){const{isExternal:n,isPublished:o}=e[i]||{};if(o&&!n){t=e[i];break}}break}}return t})({links:(null==n?void 0:n.links)||[]}),d=e=>{g.emitGoogleTrackingEvent("seriesrecirc",{title:e})},[c,w]=r();if(o.useEffect(()=>{w&&g.emitUniqueGoogleTrackingEvent("series-inview",{title:null==s?void 0:s.promoHed})},[w]),!n)return null;if(!s)return null;const{dek:k="",hed:x="",image:$=null,promoHed:T="",url:E=""}=s,N=$&&($.segmentedSources||$.sources)&&Object.assign({},$);return o.createElement(e,null,s&&o.createElement(m,{ref:c},o.createElement(h,null,o.createElement(C,null,i(S[t])),o.createElement(u,null,N&&o.createElement("a",{href:E,onClick:()=>d(T||x)},o.createElement(l,Object.assign({},N,{isLazy:!0})))),o.createElement(v,null,o.createElement(f,null,i(S[t])),(x||T)&&o.createElement(y,null,o.createElement("a",{href:E,onClick:()=>d(T||x)},o.createElement("span",{dangerouslySetInnerHTML:{__html:T||x}}))),k&&o.createElement(b,null,o.createElement("span",{dangerouslySetInnerHTML:{__html:k}}))))))};w.propTypes={ContentWrapper:i.elementType,readMoreCTA:i.string,seriesData:i.shape({hed:i.string,dek:i.string,image:i.object,links:i.arrayOf(i.shape({hed:i.string,dek:i.string,image:i.object,isCurrent:i.bool,isExternal:i.bool,isPublished:i.bool,promoDek:i.string,promoHed:i.string,url:i.string}))})},w.defaultProps={ContentWrapper:d.NarrowContentWithWideAdRail,readMoreCTA:"Read more",seriesData:null},w.displayName="SeriesRecirc",e.exports=s(w,{keysToPluck:["seriesData"]})},2611:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({readMoreDefault:{id:"ReadMore.SeriesRecirc",defaultMessage:"Read more",description:"SeriesRecirc component Read more text"},readNext:{id:"ReadNext.SeriesRecirc",defaultMessage:"Read next",description:"SeriesRecirc component Read next text"}})},2612:function(e,t,n){const i=n(3).default,{BaseText:o}=n(10),{calculateSpacing:a,getColorToken:r}=n(4),{BREAKPOINTS:s}=n(6),l=i.div.withConfig({displayName:"SeriesRecircAsset"})`
  grid-column: 1/5;

  @media (max-width: ${s.md}) {
    grid-column: 1/-1;
  }
`,d=i.div.withConfig({displayName:"SeriesRecircContainer"})`
  margin-top: ${a(4)};
  margin-bottom: ${a(5)};
  border-top: 2px solid
    ${({theme:e})=>r(e,"colors.discovery.body.white.heading")};
  padding-top: ${a(2)};
`,c=i.figure.withConfig({displayName:"SeriesRecircContent"})`
  margin-right: 0;
  margin-left: 0;

  @media (min-width: ${s.md}) {
    display: grid;
    grid-column-gap: ${a(3)};
    grid-template-columns: repeat(10, 1fr);
  }

  @media (max-width: ${s.md}) {
    display: block;
  }
`,p=i(o).withConfig({displayName:"SeriesRecircDek"})`
  @media (min-width: ${s.md}) {
    grid-column: 1/-1;
  }
`;p.defaultProps={as:"div",typeIdentity:"typography.definitions.consumptionEditorial.description-embed"},p.displayName="SeriesRecircDek";const g=i(o).withConfig({displayName:"SeriesPromoHed"})`
  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: ${s.md}) {
    grid-column: 1/-1;
  }
`;g.defaultProps={as:"h2",bottomSpacing:.625,topSpacing:1,typeIdentity:"typography.definitions.discovery.subhed-section-tertiary"};const u=i(o).withConfig({displayName:"SeriesRecircReadMoreCta"})`
  @media (max-width: ${s.md}) {
    display: none;
  }
`;u.defaultProps={typeIdentity:"typography.definitions.discovery.subhed-section-primary"};const m=i(u).withConfig({displayName:"SeriesRecircReadMoreCtaMobile"})`
  display: none;

  @media (max-width: ${s.md}) {
    display: block;
    grid-column: 1/-1;
    margin-bottom: 1em;
  }
`,h=i.div.withConfig({displayName:"SeriesRecircTextContainer"})`
  @media (min-width: ${s.md}) {
    grid-column: 5/-1;
  }
`;e.exports={SeriesRecircAsset:l,SeriesRecircContainer:d,SeriesRecircContent:c,SeriesRecircDek:p,SeriesPromoHed:g,SeriesRecircReadMoreCta:u,SeriesRecircReadMoreCtaMobile:m,SeriesRecircTextContainer:h}},2613:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(2614);e.exports=i(o,"SeriesNavigation")},2614:function(e,t,n){const i=n(1),o=n(0),a=n(8),{useIntl:r}=n(2),{connector:s}=n(18),l=n(11),d=n(2615).default,{googleAnalytics:c}=n(12),{trackComponent:p}=n(5),{SeriesNavigationAsset:g,SeriesNavigationItemContainer:u,SeriesNavigationDek:m,SeriesNavigationHeadingContainer:h,SeriesNavigationHed:b,SeriesNavigationItemDek:y,SeriesNavigationItemHed:f,SeriesNavigationItemNowReading:C,SeriesNavigationList:v,SeriesNavigationListItem:S,SeriesNavigationResponsiveAssetComingSoonText:w,SeriesNavigationResponsiveAssetContainer:k,SeriesNavigationTextContainer:x,SeriesNavigationWrapper:$,UnpublishedResponsiveAssetContainer:T}=n(2616),E={"Coming soon":d.comingSoonText,"Now reading":d.nowReadingText},N=({comingSoonText:e,nowReadingText:t,links:n})=>{const{formatMessage:i}=r(),s=a("grid"),d=e=>{c.emitGoogleTrackingEvent("seriesnavigation",{title:e})};return n.length?o.createElement(v,{className:s},n.map((n={},a)=>{const r=a,{dek:s,hed:c,image:p,isCurrent:m,isExternal:h,isPublished:b,url:v}=n,$=!b&&!h,N=p&&(p.segmentedSources||p.sources);return o.createElement(S,{key:r},o.createElement(u,null,N&&o.createElement(g,{isComingSoon:$},o.createElement(k,{isComingSoon:$},$?o.createElement(o.Fragment,null,o.createElement(w,null,i(E[e])),o.createElement(T,null,o.createElement(l,Object.assign({},p,{isLazy:!0})))):o.createElement("a",{href:v,onClick:()=>d(c)},o.createElement(l,Object.assign({},p,{isLazy:!0}))))),o.createElement(x,null,c&&($?o.createElement(f,{isComingSoon:$,dangerouslySetInnerHTML:{__html:c}}):o.createElement(f,null,o.createElement("a",{href:v,dangerouslySetInnerHTML:{__html:c},onClick:()=>d(c)}))),!m&&s&&o.createElement(y,{isComingSoon:$,dangerouslySetInnerHTML:{__html:s}}),m&&o.createElement(C,{isCurrent:m,dangerouslySetInnerHTML:{__html:i(E[t])}}))))})):null};N.propTypes={comingSoonText:i.string,links:i.arrayOf(i.shape({dek:i.string,hed:i.string,isExternal:i.bool,url:i.string})),nowReadingText:i.string},N.defaultProps={links:[]};const L=({className:e,comingSoonText:t,nowReadingText:n,seriesData:i})=>{if(o.useEffect(()=>{p("SeriesNavigation")},[]),!i)return null;const{hed:r,dek:s,links:l}=i,d={comingSoonText:t,hed:r,dek:s,links:l,nowReadingText:n},c=a("grid",e);return o.createElement($,{className:c},o.createElement(h,null,r&&o.createElement(b,{dangerouslySetInnerHTML:{__html:r}}),s&&o.createElement(m,{dangerouslySetInnerHTML:{__html:s}})),o.createElement(N,Object.assign({},d)))};L.displayName="SeriesNavigation",L.propTypes={className:i.string,comingSoonText:i.string,nowReadingText:i.string,seriesData:i.shape({hed:i.string,dek:i.string,image:i.object,links:i.arrayOf(i.shape({hed:i.string,dek:i.string,image:i.object,isCurrent:i.bool,isExternal:i.bool,isPublished:i.bool,promoHed:i.string,url:i.string}))})},L.defaultProps={comingSoonText:"Coming soon",nowReadingText:"Now reading",seriesData:null},e.exports=s(L,{keysToPluck:["seriesData"]})},2615:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({comingSoonText:{id:"ComingSoon.SeriesNavigation",defaultMessage:"COMING SOON",description:"ChannelFilter component Coming Soon text"},nowReadingText:{id:"NowReading.SeriesNavigation",defaultMessage:"Now Reading",description:"SeriesNavigation component Now Reading text"}})},2616:function(e,t,n){const i=n(3).default,{applyGridSpacing:o,cssVariablesGrid:a}=n(17),{BaseText:r}=n(10),{calculateSpacing:s,getTypographyStyles:l,getColorStyles:d}=n(4),{BREAKPOINTS:c}=n(6),{universalGridCore:p}=n(54),g=i.div.withConfig({displayName:"SeriesNavigationAsset"})`
  ${({isComingSoon:e})=>e?"background: black;":""}
`,u=i.div.withConfig({displayName:"SeriesNavigationItemContainer"})`
  @media (max-width: ${c.md}) {
    width: ${s(22)};
  }
`,m=i.div.withConfig({displayName:"SeriesNavigationDek"})`
  ${({theme:e})=>l(e,"typography.definitions.discovery.description-page")};
`,h=i.div.withConfig({displayName:"SeriesNavigationHeadingContainer"})`
  grid-column: 1/-1;
  padding-top: ${s(2)};
`,b=i.h2.withConfig({displayName:"SeriesNavigationHed"})`
  ${({theme:e})=>l(e,"typography.definitions.discovery.hed-core-primary")};

  margin-top: 0;
  margin-bottom: ${s(.25)};
`,y=i(r).withConfig({displayName:"SeriesNavigationItemDek"})`
  ${({theme:e})=>l(e,"typography.definitions.globalEditorial.context-secondary")};
  ${({isComingSoon:e})=>e?"opacity: 43%":""}
`;y.defaultProps={isComingSoon:!1};const f=i(r).withConfig({displayName:"SeriesNavigationItemHed"})`
  ${({isComingSoon:e})=>e?"opacity: 43%;":""};

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;f.defaultProps={as:"p",bottomSpacing:.6875,isComingSoon:!1,topSpacing:1,typeIdentity:"typography.definitions.discovery.hed-bulletin-primary"};const C=i(r).withConfig({displayName:"SeriesNavigationItemNowReading"})`
  ${({theme:e})=>l(e,"typography.definitions.globalEditorial.context-secondary")};

  ${({theme:e})=>d(e,"color","colors.interactive.feedback.invalid-primary")};
`,v=i.ul.withConfig({displayName:"SeriesNavigationList"})`
  grid-column: 1/-1;
  margin: 0;
  padding: 0 0 0.5rem 0;
  height: 100%;
  list-style: none;

  &.grid {
    ${p()}
  }
  @media (max-width: ${c.md}) {
    &.grid {
      display: flex;
      flex-wrap: nowrap;
      align-items: flex-start;
      padding: 0 0 1rem 0;
      width: 100%;
      overflow-x: scroll;
    }
  }
`,S=i.li.withConfig({displayName:"SeriesNavigationListItem"})`
  display: inline-block;
  grid-column: span 3;

  @media (max-width: ${c.md}) {
    &:last-child {
      padding-right: ${s(3)};
    }
  }

  @media (min-width: ${c.lg}) {
    grid-column: span 2;
  }
`,w=i.div.withConfig({displayName:"SeriesNavigationResponsiveAssetContainer"})`
  position: relative;
`,k=i(r).withConfig({displayName:"SeriesNavigationResponsiveAssetComingSoonText"})`
  position: absolute;
  top: ${s(1)};
  left: ${s(1.25)};
  z-index: 1;
`;k.defaultProps={as:"span",colorToken:"colors.background.adContainer.special",typeIdentity:"typography.definitions.discovery.subhed-section-secondary"};const x=i.div.withConfig({displayName:"SeriesNavigationWrapper"})`
  ${a()}
  ${o("padding")};

  grid-template-rows: auto auto;
  border-bottom: 1px solid;
  padding-bottom: ${s(1)};
  width: 100%;

  ${({theme:e})=>d(e,"border-color","colors.discovery.body.white.divider")};
  ${({theme:e})=>d(e,"background","colors.foundation.menu-bg.collapsed")};

  &.grid {
    ${p()}
  }
`,$=i.div.withConfig({displayName:"SeriesNavigationTextContainer"})`
  margin-top: ${s(2)};
`,T=i.div.withConfig({displayName:"UnpublishedResponsiveAssetContainer"})`
  opacity: 43%;
`;e.exports={SeriesNavigationAsset:g,SeriesNavigationItemContainer:u,SeriesNavigationDek:m,SeriesNavigationHeadingContainer:h,SeriesNavigationHed:b,SeriesNavigationItemDek:y,SeriesNavigationItemHed:f,SeriesNavigationItemNowReading:C,SeriesNavigationList:v,SeriesNavigationListItem:S,SeriesNavigationResponsiveAssetComingSoonText:k,SeriesNavigationResponsiveAssetContainer:w,SeriesNavigationTextContainer:$,SeriesNavigationWrapper:x,UnpublishedResponsiveAssetContainer:T}},2617:function(e,t,n){const i=n(1),o=n(0),{asConfiguredComponent:a}=n(9),{googleAnalytics:r}=n(12),{trackComponent:s}=n(5),{ChannelCloudContainer:l,ChannelCloudContainerWrapper:d,ChannelCloudHeaderContainer:c,ChannelCloudHeaderLink:p,ChannelCloudHeaderImage:g,ChannelCloudSubChannelContainer:u,ChannelCloudSubChannelLink:m,ChannelCloudSubChannelLinkText:h,ChannelCloudSubChannelText:b}=n(2618),y=({channels:e,headerLogo:t,headerLink:n,sectionHeader:i})=>(o.useEffect(()=>{s("ChannelCloud")},[]),o.createElement(d,null,i&&o.createElement(c,null,t&&o.createElement(g,{src:t,alt:"logo"}),o.createElement(p,{href:n,hasLogo:Boolean(t),dangerouslySetInnerHTML:{__html:i}})),e&&o.createElement(l,null,e.map(e=>o.createElement(u,{key:e.id},o.createElement(b,{dangerouslySetInnerHTML:{__html:e.text}}),e.sub.map(e=>o.createElement(m,{key:e.id,href:e.url,onClick:()=>r.emitGoogleTrackingEvent("channelCloud",e)},o.createElement(h,{dangerouslySetInnerHTML:{__html:e.text}}))))))));y.propTypes={channels:i.arrayOf(i.shape({id:i.string,text:i.string,originalText:i.string,sub:i.arrayOf(i.shape({id:i.string,text:i.string,url:i.string}))})).isRequired,headerLink:i.string,headerLogo:i.string,sectionHeader:i.string.isRequired},y.displayName="ChannelCloud",e.exports=a(y,"ChannelCloud")},2618:function(e,t,n){const i=n(3).default,{BaseText:o,BaseLink:a}=n(10),{calculateSpacing:r,getColorStyles:s}=n(4),l="\n  display: flex;\n  align-items: center;\n",d=i.div.withConfig({displayName:"ChannelCloudContainerWrapper"})``,c=i.div.withConfig({displayName:"ChannelCloudHeaderContainer"})`
  ${l};

  border-width: 0 0 ${r(.25)};
  border-style: solid;
  padding: ${r(1)} ${r(3)} ${r(2)}
    0;

  ${({theme:e})=>s(e,"border-color","colors.interactive.base.black")};
`,p=i.img.withConfig({displayName:"ChannelCloudHeaderImage"})`
  width: 25px;
  height: 30px;
`,g=i(a).withConfig({displayName:"ChannelCloudHeaderLink"})`
  position: relative;
  top: ${r(.3)};
  padding-left: ${({hasLogo:e})=>e?r(1.3):0};
`;g.defaultProps={colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.discovery.hed-bulletin-secondary"};const u=i.div.withConfig({displayName:"ChannelCloudContainer"})`
  display: flex;
  flex-wrap: wrap;
  padding: ${r(2.4)} ${r(6)}
    ${r(1)} 0;
`,m=i.div.withConfig({displayName:"ChannelCloudSubChannelContainer"})`
  ${l}
  flex-wrap: wrap;
  margin-bottom: ${r(2)};
  padding-right: ${r(2)};
`,h=i(o).withConfig({displayName:"ChannelCloudSubChannelText"})`
  padding-right: ${r(1)};

  &::after {
    content: ':';
  }
`;h.defaultProps={colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.globalEditorial.context-primary"};const b=i(a).withConfig({displayName:"ChannelCloudSubChannelLink"})`
  ${l}
  padding-right: ${r(1)};

  svg {
    ${({theme:e})=>s(e,"fill","colors.consumption.body.standard.body-deemphasized")};

    position: relative;
    top: 2px;
    right: 2px;
    transform: rotate(-45deg);
    width: 12px;
    height: 12px;
    vertical-align: bottom;
  }

  &::after {
    ${({theme:e})=>s(e,"color","colors.consumption.body.standard.body-deemphasized")};

    position: relative;
    right: ${({hasIcon:e})=>e?r(.4):0};
    line-height: 0;
    content: ',';
  }

  &:last-child {
    &::after {
      content: '';
    }
  }
`,y=i(o).withConfig({displayName:"ChannelCloudSubChannelLinkText"})`
  line-height: 1.7em;

  &:hover {
    ${({theme:e})=>s(e,"color","colors.consumption.body.standard.link-hover")};
    text-decoration: underline;
    ${({theme:e})=>s(e,"text-decoration-color","colors.consumption.body.standard.link-hover")};
  }
`;y.defaultProps={colorToken:"colors.consumption.body.standard.body-deemphasized",typeIdentity:"typography.definitions.globalEditorial.context-primary"},e.exports={ChannelCloudContainer:u,ChannelCloudContainerWrapper:d,ChannelCloudHeaderContainer:c,ChannelCloudHeaderLink:g,ChannelCloudHeaderImage:p,ChannelCloudSubChannelContainer:m,ChannelCloudSubChannelLink:b,ChannelCloudSubChannelLinkText:y,ChannelCloudSubChannelText:h}},273:function(e,t,n){e.exports={Circle:n(428),Vogue:n(442)}},274:function(e,t,n){const i=n(1),o=n(0),{useRef:a,useState:r}=n(0),{trackComponent:s}=n(5),{asThemedComponent:l}=n(34),d=n(32),{ToggleButton:c}=n(275),p=({analyticsDataAttribute:e,children:t,fullPageTheme:n,isAnchorUrl:i,isChecked:l,onChange:p,redirectUrl:g,shouldDefaultChecked:u,shouldDisplaySingleChip:m,shouldUrlRedirect:h})=>{o.useEffect(()=>{s("ToggleChip")},[]);const{current:b}=a(void 0!==l),[y,f]=r(u),C=b?l:y,[v,S]=r(C);return o.createElement(c,Object.assign({},e,{as:g?"a":"button",href:g||void 0,role:"switch","aria-checked":m?v:C,onClick:e=>(e=>{let n,o;if(m?S(e=>(o=!e,!e)):n=!C,b||f(n),p){const e=new CustomEvent("change",{detail:{checked:o||n}});p(e)}if(i){const e="#"+t.toString().toLowerCase();window.history.replaceState(void 0,void 0,e)}h||e.preventDefault()})(e),fullPageTheme:n}),m&&v&&o.createElement(d,null),t)};p.propTypes={analyticsDataAttribute:i.object,children:i.node.isRequired,fullPageTheme:i.oneOf(["standard","inverted"]),isAnchorUrl:i.bool,isChecked:i.bool,onChange:i.func,redirectUrl:i.string,shouldDefaultChecked:i.bool,shouldDisplaySingleChip:i.bool,shouldUrlRedirect:i.bool},p.defaultProps={isAnchorUrl:!1,isChecked:void 0,onChange:()=>{},shouldDefaultChecked:!1,shouldDisplaySingleChip:!1,shouldUrlRedirect:!0},e.exports=l(p)},275:function(e,t,n){const i=n(3).default,{calculateSpacing:o,getColorStyles:a,getColorToken:r,getTypographyStyles:s}=n(4),l=i.button.withConfig({displayName:"ToggleButton"})`
  display: inline-block;
  border-radius: ${o(3)};
  cursor: pointer;
  padding: ${o(1)} ${o(3)};
  text-decoration: none;
  white-space: nowrap;

  .icon {
    ${({theme:e})=>a(e,"color","colors.interactive.base.black")};
    fill: ${r("colors.interactive.base.white")};
    margin-left: ${o(-2)};
    width: ${o(4)};
    height: ${o(2)};
    vertical-align: middle;

    &:hover {
      fill: ${r("colors.interactive.base.black")};
    }
  }

  ${({theme:e})=>s(e,"typography.definitions.globalEditorial.tags")};

  &[aria-checked='false'] {
    /* TODO support rgba in getColorStyles  */
    transition: background-color 0.25s, color 0.25s;
    background-color: rgba(
      ${r("colors.interactive.base.black",{rgbOnly:!0})},
      0.1
    );
    ${({theme:e})=>a(e,"color","colors.interactive.base.black")};
  }

  &[aria-checked='true'] {
    transition: background-color 0.25s, color 0.25s;
    text-decoration: none;
    ${({theme:e})=>a(e,"background-color","colors.interactive.base.black")};
    ${({theme:e})=>a(e,"color","colors.interactive.base.white")};

    .icon {
      fill: ${r("colors.interactive.base.black")};
    }
  }

  &:hover,
  &:focus {
    outline: 0;
    /* TODO support this in getColorStyles  */
    box-shadow: 0 0 0 1px ${r("colors.interactive.base.black")}
      inset;
    text-decoration: none;

    .icon {
      fill: ${r("colors.interactive.base.black")};
    }
  }

  ${({fullPageTheme:e,theme:t})=>"inverted"===e?`\n\n      border: 1px solid;\n      ${a(t,"border-color","colors.discovery.body.white.border")};\n\n      &[aria-checked='false'] {\n        &:hover{\n          ${a(t,"background-color","colors.interactive.base.white")};\n          ${a(t,"color","colors.interactive.base.black")};\n        }\n        ${a(t,"background-color","colors.interactive.base.black")};\n        ${a(t,"color","colors.interactive.base.white")};\n      }\n\n      &[aria-checked='true'] {\n        ${a(t,"background-color","colors.interactive.base.white")};\n        ${a(t,"color","colors.interactive.base.black")};\n      }\n\n      &:hover,\n      &:focus {\n        box-shadow: none;\n      }\n    `:""}
`;e.exports={ToggleButton:l}},419:function(e,t,n){const i=n(1),o=n(0),{ToggleChipListWrapper:a,LabelText:r,ListWrapper:s,ListItemWrapper:l,HelperText:d}=n(150),{trackComponent:c}=n(5),{asThemedComponent:p}=n(34),g=({label:e,children:t,contentAlign:n,fullPageTheme:i,hasNoHorizontalScroll:p,hasIncreasedBottomMargin:g,hasLargeLabel:u,hasSpacing:m,hasToggleGridColor:h,helper:b,layout:y})=>(o.useEffect(()=>{c("ToggleChipList")},[]),o.createElement(a,{contentAlign:n,hasToggleGridColor:h},e&&o.createElement(r,{fullPageTheme:i,hasIncreasedBottomMargin:g,hasLargeLabel:u},e),o.createElement(s,{contentAlign:n,layout:y,hasNoHorizontalScroll:p,hasToggleGridColor:h,className:"list-wrapper"},o.Children.map(t,(e,t)=>e?o.createElement(l,{contentAlign:n,key:t,layout:y,hasSpacing:m,className:"list-item-wrapper"},e):null)),b&&o.createElement(d,null,b)));g.propTypes={children:i.array.isRequired,contentAlign:i.oneOf(["left","center","right"]),fullPageTheme:i.oneOf(["standard","inverted"]),hasIncreasedBottomMargin:i.bool,hasLargeLabel:i.bool,hasNoHorizontalScroll:i.bool,hasSpacing:i.bool,hasToggleGridColor:i.bool,helper:i.string,label:i.string,layout:i.oneOf(["wrap","nowrap"])},g.defaultProps={contentAlign:"left",hasIncreasedBottomMargin:!1,hasLargeLabel:!1,hasNoHorizontalScroll:!1,hasSpacing:!1,layout:"wrap"},e.exports=p(g)},421:function(e,t,n){e.exports=n(450)},423:function(e,t,n){const{fetchWithTimeout:i}=n(51),{loadData:o}=n(449);e.exports={fetchWithTimeout:i,loadData:o}},428:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};const o=n(0),a=n(1),r=e=>{var{fillColor:t="#000",width:n="100px",height:a="100px",margin:r="20px"}=e,s=i(e,["fillColor","width","height","margin"]);return o.createElement("svg",Object.assign({style:{width:n,height:a,margin:r,display:"inline-block"}},s,{version:"1.1",id:"L9",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 0 0"}),o.createElement("path",{fill:t,d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"},o.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})))};r.propTypes={fillColor:a.string,height:a.string,margin:a.string,width:a.string},e.exports=r},441:function(e,t,n){const i=n(1447),o=n(15),a=e=>{const t=o(e,"gradient-style"),n=o(e,"color-stops");let i=o(e,"angle");"radial"===t&&(i=null);return`background: ${((e,t,n=null)=>null===n?`${e}-gradient(${t})`:`${e}-gradient(${n}, ${t})`)(t,n,i)}; position: sticky;`},r=e=>{const t=o(e,"url"),n=o(e,"repeat"),i=o(e,"color"),a=o(e,"attachment"),r=o(e,"size");return((e,t="no-repeat",n="center",i="cover",o="scroll",a="transparent")=>{let r,s="";if(null!==e&&(r=e),s=`background-image:${r};\n      background-attachment:${o};\n      background-color:${a};\n      background-repeat:${t};\n      background-position:${n};`,"string"==typeof i)s+=`background-size:${i};`;else{const e=[];i.forEach(t=>{e.push(t)}),s+=`background-size:${i.toString()};`}return s})(t,n,o(e,"position"),r,a,i)},s=e=>{return i(e,"gradient")?a(o(e,"gradient")):i(e,"image")?r(o(e,"image")):i(e,"solid")?(t=o(e,"solid"),`background-color:${o(t,"color")};`):"background: none;";var t};e.exports={getPattern:(e,t)=>{let n;if(!e||0===Object.keys(e).length||!t)return"background: none;";if(i(e,"container-styles")){const l=e["container-styles"];if(!l[t])return"background: none;";n=l[t];const d=i(n,"pattern")?n.pattern:null;if(d&&d.length){let e="";return d.length>=2?(d.forEach((t,n)=>{let s=n;if(i(t,"gradient"))e+=a(o(t,"gradient"));else if(i(t,"image")){let n="";o(t,"image").size&&(n=o(t,"url")),n.size?e+=`'url(${n})'`:s=d.length,r(o(t,"image"))}else if(i(t,"solid")){const n=o(t,"solid");n&&(e+=o(n,"color"))}s!==d.length-1&&(e+=",")}),e.toString()):s(d[0])}}return"background: none;"}}},442:function(e,t,n){const i=n(0),{VogueWrapper:o}=n(443);e.exports=()=>i.createElement(o,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 36",textRendering:"geometricPrecision",shapeRendering:"geometricPrecision",className:"loader-vogue"},i.createElement("path",{id:"E",className:"st0",d:"M23.2612,0L23.2612,11.7649C23.2612,11.8148,23.0279,11.8315,23.0279,11.7649C23.0279,11.6982,23.2612,0.333282,12.7129,0.333282L8.76346,0.333282C8.54683,0.333282,8.41352,0.36661,8.41352,0.549915L8.41352,15.231C8.41352,15.3643,8.54683,15.4476,8.76346,15.4476L10.0799,15.4476C16.3456,15.4476,15.8457,9.14859,15.8457,9.08193C15.8457,9.01528,16.0957,9.03194,16.0957,9.08193C16.0957,9.13193,16.1123,22.2966,16.1123,22.3466C16.1123,22.3966,15.929,22.4132,15.929,22.3466C15.929,22.2799,15.779,15.7809,9.94661,15.7809L8.76346,15.7809C8.56349,15.7809,8.41352,15.8476,8.41352,15.9975L8.41352,31.7951C8.41352,31.9118,8.54683,32.0117,8.76346,32.0117C9.64666,32.0117,11.9296,32.0284,12.5629,32.0284C23.8945,32.0617,23.7445,19.8969,23.7445,19.8469C23.7445,19.797,24.0278,19.797,24.0278,19.8469L24.0278,32.445L0.114794,32.445C0.0481373,32.445,0.0481373,32.0951,0.114794,32.0951L2.49776,32.0951C2.71439,32.0951,2.84771,32.0284,2.84771,31.8784C2.84771,29.1455,2.84771,0.799877,2.84771,0.549915C2.84771,0.349946,2.58108,0.333282,2.49776,0.333282C2.46443,0.333282,1.23129,0.333282,0.0148091,0.333282C0.0148091,0.333282,-0.0685114,0.166641,0.0148091,0C0.0981296,0,23.2612,0,23.2612,0",opacity:"0",transform:"translate(4.15223,1.87884)",style:{animation:"E_o 1.5s linear infinite both"}}),i.createElement("path",{id:"U",className:"st0",d:"M27.1719,0.266719C25.7716,0.266719,24.3713,0.266719,24.3713,0.266719C24.3713,0.266719,24.0214,0.266719,24.0214,0.466748C24.0214,2.70041,24.0214,21.5031,24.0214,24.1868L24.0214,24.2034C24.038,30.8378,18.9372,33.0048,15.2701,33.0548L15.2701,33.0381C10.9528,33.0548,3.20169,32.338,3.20169,22.77C3.20169,22.77,3.18502,1.00016,3.16835,0.700115C3.15167,0.233381,2.55159,0.250051,2.55159,0.250051C2.55159,0.250051,0.10124,0.250051,0.017895,0.250051C-0.0654503,0.250051,-0.0487813,-0.1,0.017895,-0.1L11.9529,-0.1C12.0196,-0.1,12.003,0.250051,11.9529,0.250051C11.9029,0.250051,9.41925,0.250051,9.41925,0.250051C9.41925,0.250051,8.6358,0.216712,8.6358,0.733453C8.6358,1.46689,8.65246,25.0203,8.65246,25.8537C8.65246,29.5209,10.7361,32.7714,15.2534,32.7048C18.7873,32.638,23.6879,30.5711,23.6714,24.1868C23.6714,23.8701,23.6714,2.83376,23.6714,0.466748C23.6546,0.283389,23.3046,0.266719,23.3046,0.266719L19.9875,0.266719C19.9207,0.266719,19.9207,-0.0666619,20.004,-0.0666619C20.0208,-0.0666619,27.0885,-0.0666619,27.1719,-0.0666619C27.2385,0.100029,27.1719,0.266719,27.1719,0.266719Z",opacity:"0",transform:"translate(2.57354,1.9455)",style:{animation:"U_o 1.5s linear infinite both"}}),i.createElement("path",{id:"G",className:"st0",d:"M16.5382,19.9408L19.2012,19.9408C19.2012,19.9408,19.7005,19.8909,19.7005,20.124C19.7005,20.1406,19.7005,27.7636,19.7005,27.7636C19.7005,33.6389,13.8419,33.7056,12.1941,33.5224C6.06906,32.8233,5.95255,20.1905,5.91927,16.8784C5.83605,7.85727,7.2508,0.00125154,13.4091,0.317489C20.7159,0.683659,22.63,11.1694,22.7465,11.6355C22.9962,11.7187,22.9962,11.519,22.9962,11.519L23.0127,0.0844721C23.0127,0.0844721,22.9628,-0.0153926,22.813,0.11776C22.7631,0.167692,22.6965,0.23427,22.63,0.300845C19.401,3.59637,17.7866,0.134404,13.0762,-0.0153926C7.28409,-0.198477,0.0938322,7.82398,-0.00603238,17.0947C-0.105897,26.4154,6.01913,33.6056,12.7101,33.8554C16.3385,33.9885,16.2553,32.9898,20.7324,31.5917C23.4621,30.743,24.7604,32.5904,24.8602,33.356C25.0267,33.4725,25.0434,33.2727,25.0434,33.2727L25.0434,20.1739C25.0434,19.9077,25.4094,19.9576,25.4094,19.9576L27.8729,19.9576C27.9394,19.9576,27.9394,19.5914,27.8729,19.5914L16.5216,19.5914C16.4383,19.5914,16.4383,19.9408,16.5382,19.9408",opacity:"0",transform:"translate(2.19725,0.935133)",style:{animation:"G_o 1.5s linear infinite both"}}),i.createElement("path",{id:"O",className:"st0",d:"M5.92208,16.6329C5.92208,7.61677,7.65213,0.247436,14.0399,0.264071C20.9103,0.264071,22.2578,7.93283,22.2578,16.6496C22.2578,25.6659,20.9435,33.4346,14.09,33.4346C6.73721,33.4177,5.92208,26.115,5.92208,16.6329M13.9735,33.6839C20.7938,33.7005,28.1633,26.1649,28.18,16.8159C28.1965,7.01792,21.1101,0.0478142,14.09,-0.00209099C6.90356,-0.0686311,0,7.83302,0,16.8159C0,26.0983,6.52095,33.6507,13.9735,33.6839",opacity:"0",transform:"translate(2.065,1.05937)",style:{animation:"O_o 1.5s linear infinite both"}}),i.createElement("path",{id:"V",className:"st0",d:"M0.0178861,0L11.7176,0C11.7843,0,11.7676,0.349993,11.7176,0.349993L9.31769,0.349993C9.31769,0.349993,8.63437,0.31666,8.85104,0.699985C8.88437,0.783317,17.1175,23.2828,17.1175,23.2828C17.1175,23.2828,17.2675,23.6662,17.3842,23.7162C17.3842,23.7162,24.7007,1.11664,24.7007,1.09998C24.7674,0.883315,25.034,0.366659,24.584,0.366659L21.9341,0.366659C21.8841,0.366659,21.8841,0.0166663,21.9341,0.0166663L28.234,0.0166663C28.284,0.0166663,28.284,0.366659,28.234,0.366659L25.884,0.366659C25.234,0.349993,25.234,0.549989,25.1174,0.883315C25.0674,1.04998,14.9342,32.616,14.9342,32.616C14.9342,32.616,14.8842,32.4827,14.8509,32.3493C10.5677,19.9663,3.93447,2.73328,3.40115,0.883315C3.25115,0.333326,3.16782,0.349993,2.83449,0.349993C2.71783,0.349993,0.101218,0.349993,0.0178861,0.349993C-0.0654455,0.349993,-0.0487792,0,0.0178861,0",opacity:"0",transform:"translate(2.03854,1.8455)",style:{animation:"V_o 1.5s linear infinite both"}}))},443:function(e,t,n){const i=n(3).default.svg.withConfig({displayName:"VogueWrapper"})`
  animation: rotate 2s linear infinite;
  width: 36px;
  height: 32px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes E_o {
    0% {
      opacity: 0;
    }

    80.5556% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    83.3333% {
      opacity: 1;
    }

    97.2222% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes U_o {
    0% {
      opacity: 0;
    }

    63.8889% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    66.6667% {
      opacity: 1;
    }

    80.5556% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    83.3333% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes G_o {
    0% {
      opacity: 0;
    }

    47.2222% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    63.8889% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    66.6667% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes O_o {
    0% {
      opacity: 0;
    }

    30.5556% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    33.3333% {
      opacity: 1;
    }

    47.2222% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes V_o {
    0% {
      opacity: 0;
    }

    13.8889% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    16.6667% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 1;
    }

    30.5556% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    33.3333% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
`;e.exports={VogueWrapper:i}},444:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(445);e.exports=i(o,"ChannelNavigation")},445:function(e,t,n){const i=n(0),{useState:o,useRef:a,useEffect:r}=n(0),s=n(1),{useIntl:l}=n(2),d=n(40),c=n(446).default,{connector:p}=n(18),{trackComponent:g}=n(5),{googleAnalytics:u}=n(12),m=n(447),h=n(121),b=n(32),y=n(102),{INITIAL_STATE:f,computeScroll:C}=n(28),{ChannelNavigationWrapper:v,ChannelNavigationContainer:S,ChannelNavigationContent:w,ChannelNavigationLogoWrapper:k,ChannelNavigationLogo:x,ChannelNavigationScrollViewLogo:$,ChannelNavigationLinksWrapper:T,ChannelNavigationLinksList:E,ChannelNavigationLinkItem:N,ChannelNavigationLink:L,ChannelNavigationChannelDrawer:I,ChannelNavigationGroupedNavigation:B,ChannelNavigationGlobalDrawer:A,ChannelNavigationAccount:P,ChannelNavigationToggle:D,ChannelNavigationSecondaryMenu:R}=n(455),M=({accountProps:e,isFixed:t,logo:n,isAccountsEnabled:s,scrollViewLogo:p,channelNavigationLinks:M,channelNavigationLogoBaseUrl:O,overrideChannelNavigationLinks:H,secondaryMenuProps:_,showExternalProfileLink:W,loaderType:G,onNavigationLinkClick:j,activeLinkIndex:F,user:V,hideLinksOnMobile:U})=>{i.useEffect(()=>{g("ChannelNavigation")},[]);const[z,q]=o(!1),[K,Y]=i.useState(!1),[Z,X]=o(null),[J,Q]=o(f),ee=a(null),{formatMessage:te}=l(),ne=H||M;i.useEffect(()=>{const e=e=>{"Escape"===e.key&&K&&(u.emitGoogleTrackingEvent("hamburger-menu-"+(K?"collapsed":"expanded")),Y(!1))};return K&&window.addEventListener("keyup",e),()=>window.removeEventListener("keyup",e)},[K]);const ie=e=>{Q(e=>{var t,n;const i=C(e),o=(null===(t=null===document||void 0===document?void 0:document.body)||void 0===t?void 0:t.scrollHeight)-(null===(n=null===document||void 0===document?void 0:document.body)||void 0===n?void 0:n.clientHeight);return Object.assign(Object.assign({},i),{scrollHeight:o})}),e.preventDefault()};r(()=>{const e=d(ie,100);return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[t]);const{direction:oe,pageYOffset:ae,scrollHeight:re}=J,se=K?b:y,le=t||ae>0,de=t||"up"!==oe&&ae>0||re===ae;return ne&&ne.length?i.createElement(v,{isFixed:le},i.createElement(S,{ref:ee,"data-testid":"channel-navigation"},i.createElement(w,{isFixed:le,isScrollingDown:de},n&&p&&i.createElement(k,{isFixed:le,isScrollingDown:de},i.createElement("a",{href:O},i.createElement(x,Object.assign({isScrollingDown:de},n)),de&&i.createElement($,Object.assign({isScrollingDown:de},p))))),i.createElement(T,{isScrollingDown:de,hideLinksOnMobile:U},i.createElement(E,{"data-journey-hook":"channel-navigation"},ne.map((e,t)=>{const n=void 0===F||t===F;return i.createElement(N,{key:e.key||e.type},i.createElement(L,{tabIndex:0,isActive:n,label:e.text,href:e.href,as:"a",isInline:!0,onClick:t=>{e.apiEndpoint&&(t.preventDefault(),q(!0),X(Object.assign({},e))),j&&j(e),u.emitGoogleTrackingEvent(e.analyticsEvent)}},e.text))}))),!s&&W&&i.createElement(P,{isScrollingDown:de,signInLabel:null==W?void 0:W.signInLabel,signInLink:null==W?void 0:W.signInLink,user:{isAuthenticated:!1}}),s&&V&&i.createElement(P,{isScrollingDown:de,accountLinks:e.accountLinks,savedStoriesLabel:null==e?void 0:e.savedStoriesLabel,accountBookmarkAlertLabel:null==e?void 0:e.accountBookmarkAlertLabel,accountLabel:null==e?void 0:e.accountLabel,signInLabel:null==e?void 0:e.signInLabel,signInLink:null==e?void 0:e.signInLink,signOutLink:null==e?void 0:e.signOutLink,user:V,className:"standard-navigation__section--utility-links-login"}),i.createElement(D,{tabIndex:0,isIconButton:!0,isScrollingDown:de,ButtonIcon:se,label:"Open Navigation Menu",onClickHandler:()=>{u.emitGoogleTrackingEvent("hamburger-menu-"+(K?"collapsed":"expanded")),Y(!K)},role:"button","aria-expanded":K})),!!Z&&i.createElement(I,{isOpen:z,onClose:()=>{q(!1)},contentLabel:te(c.channelDrawerContentLabel),showCloseButton:!0,className:"channel-navigation-drawer"},i.createElement(B,null,i.createElement(m,{storeKey:Z.key,dataUrl:Z.apiEndpoint,hasAtoZIndex:Z.hasAtoZIndex,loaderType:G,hasFilter:Z.hasFilter,filterLabel:Z.filterLabel}))),i.createElement(A,{isOpen:K,onClose:()=>Q(!K),contentLabel:"Navigation Menu"},i.createElement(R,{isFixed:le},!s&&W?i.createElement(h,Object.assign({},_,{user:{isAuthenticated:!1},isAccountsEnabled:!0,contentAlign:"center"})):i.createElement(h,Object.assign({accountProps:e},_,{user:V,isAccountsEnabled:s,contentAlign:"center"}))))):null},O=s.shape({text:s.string,key:s.string,apiEndpoint:s.string});M.defaultProps={accountProps:{accountLinks:[]},hideLinksOnMobile:!1,isAccountsEnabled:!1},M.propTypes={accountProps:s.object,activeLinkIndex:s.number,channelNavigationLinks:s.arrayOf(O),channelNavigationLogoBaseUrl:s.string,hideLinksOnMobile:s.bool,isAccountsEnabled:s.bool,isFixed:s.bool,loaderType:s.string,logo:s.object,onNavigationLinkClick:s.func,overrideChannelNavigationLinks:s.arrayOf(O),scrollViewLogo:s.object,secondaryMenuProps:s.object,showExternalProfileLink:s.object,user:s.shape({isAuthenticated:s.bool.isRequired})},M.displayName="ChannelNavigation",e.exports=p(M,{keysToPluck:["user","isAccountsEnabled","accountProps"]})},446:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({toggleLabel:{id:"ChannelNavigation.ToggleLabel",defaultMessage:"Open Navigation Menu",description:"ChannelNavigation component toggle label"},channelDrawerContentLabel:{id:"ChannelNavigation.ChannelDrawerContentLabel",defaultMessage:"Runway filters navigation",description:"ChannelNavigation component channel drawer content label"},globalDrawerContentLabel:{id:"ChannelNavigation.GlobalDrawerContentLabel",defaultMessage:"Navigation Menu",description:"ChannelNavigation component global drawer content label"}})},447:function(e,t,n){e.exports=n(448)},448:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};const o=n(1),a=n(0),{useState:r,useEffect:s}=n(0),{connect:l}=n(21),{loadData:d}=n(423),c=n(421),p=n(273),{LoaderWrapper:g}=n(454),u=n(151),{trackComponent:m}=n(5),h=e=>{var{dataUrl:t,storeKey:n,data:o,setData:l,loaderType:h="Circle"}=e,b=i(e,["dataUrl","storeKey","data","setData","loaderType"]);a.useEffect(()=>{m("GroupedNavigationContainer")},[]);const[y,f]=r(!1),[C,v]=r(!1),S=p[h];return s(()=>{!async function(){if(!o&&t){f(!0);try{const e=await d({url:""+t}),i=e?e[n]:[];l(n,i)}catch(e){v(!0)}finally{f(!1)}}}()},[t]),a.createElement(a.Fragment,null,C&&a.createElement(u.ContentCenterNoBackground,{ariaLive:"polite",className:"brand-background__lede",dangerousHed:"Oops",dangerousDek:"something went wrong"}),y&&a.createElement(g,null,a.createElement(S,null)),o&&a.createElement(c,Object.assign({groupedLinks:o},b)))};h.propTypes={analyticsEventForFilter:o.string,data:o.array,dataUrl:o.string.isRequired,filterLabel:o.string,hasAtoZIndex:o.bool,hasFilter:o.bool,loaderType:o.string,setData:o.func.isRequired,storeKey:o.string.isRequired},e.exports=l((e,{storeKey:t})=>{var n;return{data:(null===(n=e.groupedNavigation)||void 0===n?void 0:n[t])||null}},e=>({setData:(t,n)=>{e({type:"MERGE_KEY",key:"groupedNavigation",value:{[t]:n}})}}))(h)},449:function(e,t){e.exports={loadData:async function({url:e,gtmEvent:t=null}){window.dataLayer&&t&&window.dataLayer.push({event:t});const n=await fetch(e);if(n.ok)return n.json();throw new Error(n.statusText)}}},450:function(e,t,n){const i=n(1),o=n(0),{useIntl:a}=n(2),{useState:r}=n(0),s=n(143),l=n(84),d=n(70),{asConfiguredComponent:c}=n(9),{filter:p,useDebounce:g}=n(451),u=n(452),{trackComponent:m}=n(5),{GroupedNavigationWrapper:h,GroupedNavigationFilter:b,GroupedNavigationFilterContent:y,GroupedNavigationFilterInput:f,GroupedNavigationContent:C,GroupedNavigationLinks:v,GroupedNavigationGroup:S,GroupedNavigationIndex:w}=n(217),k=n(453).default,x=({className:e,groupedLinks:t,showContentDivider:n=!0,hasAtoZIndex:i=!1,hasFilter:c=!1,analyticsEventForFilter:x,filterLabel:$})=>{o.useEffect(()=>{m("GroupedNavigation")},[]);const{formatMessage:T}=a(),E=o.useRef(null),N=s(),[L,I]=r(""),[B,A]=g(t,200);return t&&t.length?o.createElement(h,{className:e,hasFilter:c,"data-testid":"GroupedNavigationWrapper"},c&&o.createElement(b,null,o.createElement(y,null,o.createElement(f,{placeholder:$,"aria-label":$||T(k.filterInputAriaLabelText),name:"filter",type:"text",onChange:e=>{const n=e.target.value;I(n),A(()=>p(t,n))},onFocus:()=>{x&&l.emitGoogleTrackingEvent(x)},value:L}),o.createElement(d,null))),o.createElement(C,{hasFilter:c},o.createElement(v,{ref:E},B.map(e=>{if(!e.links)return null;const t=e.links.map(e=>{const t=!0===e.isSecondary?"link--secondary":"link--primary";return Object.assign(Object.assign({},e),{className:t})}),a={};return i&&(a.id="#"===e.groupName?"other-"+N:`${e.groupName.toLowerCase()}-${N}`),o.createElement(S,{key:e.groupName,className:"grouped-navigation__group",links:t,linkClassName:"grouped-navigation__link",heading:e.groupName,showContentDivider:n,shouldStyleListItems:!0,attributes:a})})),i&&o.createElement(w,{className:"grouped-navigation__index"},o.createElement(u,{links:t,linksRef:E,navId:N})))):null},$=i.shape({text:i.string.isRequired,url:i.string.isRequired,isSecondary:i.bool,analyticsEvent:i.string}),T=i.arrayOf(i.shape({links:i.arrayOf($),groupName:i.string,groupId:i.string}));x.propTypes={analyticsEventForFilter:i.string,className:i.string,filterLabel:i.string,groupedLinks:T,hasAtoZIndex:i.bool,hasFilter:i.bool,showContentDivider:i.bool},x.displayName="GroupedNavigation",e.exports=c(x,"GroupedNavigation"),e.exports.groupedLinksShape=T},451:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.useDebounce=t.filter=void 0;const{useState:i,useCallback:o}=n(0),a=n(49);t.filter=(e,t)=>{if(!(null==t?void 0:t.trim()))return e;const n=e=>e.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/gi,"");return e.map(e=>{var i;return Object.assign(Object.assign({},e),{links:null===(i=e.links)||void 0===i?void 0:i.filter(e=>/(\s|')/.test(t)?n(e.text).includes(n(t)):e.text.match(/([a-zA-Z]\.){2,}/)?e.text.split(" ").filter(e=>n(e).startsWith(n(t))).length:e.text.split(/([ \-'’.]+)/).filter(e=>n(e).startsWith(n(t))).length)})}).filter(e=>{var t;return null===(t=e.links)||void 0===t?void 0:t.length})};t.useDebounce=(e,t)=>{const[n,r]=i(e),s=o(a(e=>{r(e)},t),[]);return[n,e=>{s(e)}]}},452:function(e,t,n){const i=n(1),o=n(0),{AtoZIndexWrapper:a,AtoZIndexList:r,AtoZIndexLink:s,AtoZIndexText:l}=n(217),d=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","#"],c=({links:e,linksRef:t,navId:n})=>{if(!e||!e.length)return null;const i=e=>{e.preventDefault();const n=window.requestAnimationFrame||(e=>window.setTimeout(e,20)),i=document.getElementById(e.target.hash.replace("#",""));if(!i)return;const{offsetTop:o}=i,{offsetTop:a,scrollTop:r}=t.current,s=o-a-r;let l=0;const d=()=>{l+=20;const e=function(e,t,n,i){let o=e;return o/=i/2,o<1?n/2*o*o+t:(o--,-n/2*(o*(o-2)-1)+t)}(l,r,s,600);t.current.scrollTop=e,l<600&&n(d)};d()};return o.createElement(a,{"data-testid":"AtoZIndexWrapper"},o.createElement(r,null,d.map(t=>{const a=e.find(e=>e.groupName===t);return a?o.createElement("li",{key:t},o.createElement(s,{"data-testid":"AtoZIndexLink",href:"#"+("#"===a.groupName?"other-"+n:`${a.groupName.toLowerCase()}-${n}`),onClick:i},t)):o.createElement(l,{key:t},t)})))};c.propTypes={links:i.arrayOf(i.shape({groupName:i.string.isRequired})),linksRef:i.object,navId:i.string},e.exports=c},453:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);t.default=i.defineMessages({filterInputAriaLabelText:{id:"GroupedNavigation.FilterInputAriaLabel",defaultMessage:"Filter links",description:"Grouped Navigation Filter component aria label text",isConfigurable:!0}})},454:function(e,t,n){const i=n(3).default,{calculateSpacing:o}=n(4),a=i.div.withConfig({displayName:"LoaderWrapper"})`
  padding-top: ${o(6)};
  text-align: center;
`;e.exports={LoaderWrapper:a}},455:function(e,t,n){const i=n(3).default,{calculateSpacing:o,getColorToken:a,getTypographyStyles:r,getZIndex:s}=n(4),{hideVisually:l}=n(48),{BREAKPOINTS:d,ZINDEX_MAP:c}=n(6),{maxThresholds:p}=n(16),g=n(14),u=n(79),m=n(59),h=n(19),b=n(164),{SecondaryMenuAccount:y}=n(163),{StandardNavigationDropdown:f,StandardNavigationAccountLabel:C,AccountDropdownToggleIcon:v}=n(82),{GridItem:S}=n(27),w=i.nav.withConfig({displayName:"ChannelNavigationWrapper"})`
  position: relative;
  z-index: ${c.persistentTopLayer};
  max-height: ${o(24)};
  ${({isFixed:e})=>e&&"\n      position: fixed;\n      top: 0;\n      right: 0;\n      left: 0;\n      "};
`;w.displayName="ChannelNavigationWrapper";const k=i.div.withConfig({displayName:"ChannelNavigationContainer"})`
  position: relative;
  border-bottom: 1px solid rgba(51, 51, 51, 1);

  background: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};
  @media (min-width: ${d.md}) {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`,x=i.div.withConfig({displayName:"ChannelNavigationContent"})`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  z-index: 1;
  margin: 0 auto;
  border-bottom: 1px solid
    ${({theme:e})=>a(e,"colors.consumption.lead.inverted.divider")};
  background: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};
  @media (min-width: ${d.md}) {
    flex-wrap: ${({isScrollingDown:e})=>e?"nowrap":"wrap"};
  }
`,$=i.div.withConfig({displayName:"ChannelNavigationLogoWrapper"})`
  margin: 0 auto;
  padding: ${o(1)};

  @media (min-width: ${d.md}) {
    ${({isScrollingDown:e})=>e?`\n      left: ${o(3)};\n      position: absolute;\n      padding: ${o(1)};\n    `:`padding: ${o(1)} 0;`}
  }
`,T=i(m).withConfig({displayName:"ChannelNavigationLogo"})`
  width: 96px;
  @media (min-width: ${d.md}) {
    display: flex;
    padding: ${o(1)} 0;
    width: 168px;
    height: 88px;
    ${({isScrollingDown:e})=>e&&`\n        ${l()}\n      `};
  }
`,E=i(m).withConfig({displayName:"ChannelNavigationScrollViewLogo"})`
  @media (max-width: ${d.md}) {
    ${l()}
  }
  padding: ${o(.5)} 0;
  width: 83px;
  height: unset;
`,N=i(h.NoMargins).withConfig({displayName:"ChannelNavigationLinksWrapper"})`
  > ${S} {
    grid-column: 1;
    margin: 0 auto;
    text-align: center;
    @media (min-width: ${d.md}) {
      grid-column: 2 / span 10;
    }
  }

  position: absolute;
  top: auto;
  transition: transform 0.5s ease-in-out;
  background: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  ${({isScrollingDown:e})=>e?"transform: translateY(-100%);":"transform: translateY(0%);"}

  @media (min-width: ${d.md}) {
    display: grid;
    position: initial;
    align-items: center;
    justify-content: center;
    transform: none;
    margin: 0 calculateSpacing(14.5);
    height: 64px;
  }

  @media (max-width: ${p.md}px) {
    ${({hideLinksOnMobile:e})=>e?l()+";":`padding: ${o(2)} 0 ${o(2)}\n      ${o(3)};\n      &::after {\n        background: linear-gradient(\n          to right,\n          rgba(0, 0, 0, 0.01) 31.25%,\n          ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")}\n            100%\n        );\n        content: '';\n        height: ${o(4)};\n        width: 48px;\n        bottom: ${o(2)};\n        right: 0;\n        position: sticky;\n        pointer-events: none;`}
  }
`,L=i.ul.withConfig({displayName:"ChannelNavigationLinksList"})`
  display: flex;
  margin: 0 auto;
  list-style: none;
  text-align: center;
  padding-inline-start: 0;

  @media (max-width: ${d.md}) {
    ${({hideLinksOnMobile:e})=>e?l()+";":""}
  }
`,I=i.li.withConfig({displayName:"ChannelNavigationLinkItem"})`
  padding-right: ${o(2)};

  &:last-child {
    padding-right: 0;
  }

  @media (min-width: ${d.md}) {
    margin-right: 0;
    padding-right: ${o(3)};
  }
`,B=i.a.withConfig({displayName:"ChannelNavigationLink"})`
  ${({theme:e})=>r(e,"typography.definitions.foundation.link-primary")}

  border: none;
  min-width: auto;
  text-decoration: none;
  white-space: nowrap;
  color: rgb(
    ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link",{rgbOnly:!0})},
    ${({isActive:e})=>e?"1":"0.6"}
  );

  &:hover {
    color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link-hover")};
  }
`,A=i(u.Right).withConfig({displayName:"ChannelNavigationChannelDrawer"})`
  @media (min-width: ${d.md}) {
    width: 400px;
    max-width: 400px;

    && {
      height: 100%;
    }
  }
`,P=i.div.withConfig({displayName:"ChannelNavigationGroupedNavigation"})`
  padding: 0 ${o(4)} ${o(2)};
  height: 100%;
`,D=i(u).withConfig({displayName:"ChannelNavigationGlobalDrawer"})`
  height: auto;
`,R=i(b).withConfig({displayName:"ChannelNavigationAccount"})`
  position: absolute;
  right: ${o(3)};
  border: none;
  background: transparent;
  padding: ${o(1)} ${o(1.5)};

  @media (max-width: ${d.md}) {
    display: none;
  }

  @media (min-width: ${d.md}) {
    left: inherit;
    padding: 0;
    min-width: auto;
  }

  &&&.standard-navigation-account {
    position: absolute;
    top: ${({isScrollingDown:e})=>o(e?1.4:14.4)};
    margin-right: ${o(3)};
    margin-left: ${o(1.5)};
    width: ${o(12)};
    height: ${o(6)};
    white-space: nowrap;
  }

  ${C} {
    justify-content: center;
    color: ${({theme:e})=>a(e,"colors.interactive.base.white")};

    &:hover,
    &:link,
    &:visited,
    &:active {
      color: ${({theme:e})=>a(e,"colors.interactive.base.white")};

      svg {
        path {
          fill: ${({theme:e})=>a(e,"colors.interactive.base.white")};
        }
      }
    }
  }

  .standard-navigation-account--icon,
  ${v} {
    margin-right: ${o(2)};
  }

  ${f} {
    top: ${o(6)};
    background-color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};
    color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link")};

    &::before {
      border-color: black;
    }
  }

  ${f} .account-links__navigation {
    background-color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};

    .navigation__list-item {
      &:hover {
        background-color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};
      }

      .navigation__link {
        ${({theme:e})=>r(e,"typography.definitions.foundation.link-secondary")};
        color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link")};
      }
    }
  }

  ${f}

  .account-links__sign-out {
    ${({theme:e})=>r(e,"typography.definitions.foundation.link-secondary")};
    color: ${a("colors.consumption.lead.inverted.link")};

    &:hover {
      background-color: ${a("colors.consumption.lead.standard.divider")};
      color: ${a("colors.consumption.lead.standard.link")};
    }
  }
`,M=i(g.Utility).withConfig({displayName:"ChannelNavigationToggle"})`
  position: absolute;
  top: 14px;
  right: ${o(2)};
  z-index: ${s("dropdown")};
  border: none;
  background: transparent;
  padding: ${o(1)} ${o(1.5)};
  width: ${o(4)};
  height: ${o(4)};
  @media (min-width: ${d.md}) {
    top: ${({isScrollingDown:e})=>e?o(2.5):"122px"};
    left: inherit;
    padding: 0;
    min-width: auto;
  }

  & > div {
    position: absolute;
  }

  path {
    fill: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link")};
  }

  &:focus {
    outline: 2px auto -webkit-focus-ring-color;
    border: unset;
    background: transparent;
  }

  &:hover {
    border-width: unset;
    border-style: none;
    border-color: transparent;
    background: transparent;

    path {
      fill: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link-hover")};
    }
  }
`,O=i.div.withConfig({displayName:"ChannelNavigationSecondaryMenu"})`
  padding-top: ${({isFixed:e})=>e?0:"62px"};
  height: 100%;
  ${y} {
    display: block;
  }

  @media (min-width: ${d.md}) {
    padding-top: ${({isFixed:e})=>e?0:"160px"};
  }

  @media (min-width: ${d.lg}) {
    height: 100vh;
    ${y} {
      display: none;
    }
  }
`;e.exports={ChannelNavigationWrapper:w,ChannelNavigationContainer:k,ChannelNavigationContent:x,ChannelNavigationLogoWrapper:$,ChannelNavigationLogo:T,ChannelNavigationScrollViewLogo:E,ChannelNavigationLinksList:L,ChannelNavigationLinksWrapper:N,ChannelNavigationLinkItem:I,ChannelNavigationLink:B,ChannelNavigationChannelDrawer:A,ChannelNavigationGlobalDrawer:D,ChannelNavigationGroupedNavigation:P,ChannelNavigationAccount:R,ChannelNavigationToggle:M,ChannelNavigationSecondaryMenu:O}},509:function(e,t,n){const i=n(3).default,o=n(14),{CaptionWrapper:a,CaptionText:r}=n(58),{calculateSpacing:s,getColorToken:l,getLinkStyles:d}=n(4),c=n(438),{BREAKPOINTS:p}=n(6),{ResponsiveImageContainer:g}=n(24),u=i.div.withConfig({displayName:"LightboxWrapper"})`
  grid-column-start: main;
`,m=i(c).withConfig({displayName:"LightboxSwipe"})`
  display: flex;
  width: 100%;
  height: 100%;
`,h=i(o.Utility).withConfig({displayName:"LightboxCloseButtonIcon"})`
  position: fixed;
  top: ${s(.5)};
  right: ${s(.5)};
  z-index: 1;
  cursor: pointer;
  padding: 8px;
  line-height: 0;

  &.listicle-variation-close {
    top: 1px;
  }

  &,
  &:hover {
    border: 1px solid
      ${({theme:e})=>l(e,"colors.interactive.base.white")};
    background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
  }

  &:focus {
    border: 1px solid
      ${({theme:e})=>l(e,"colors.interactive.base.brand-primary")};
    background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
  }

  .icon {
    fill: ${({theme:e})=>l(e,"colors.interactive.base.dark")};
  }

  .icon:hover {
    fill: ${({theme:e})=>l(e,"colors.interactive.base.brand-primary")};
    border: 1px solid
      ${({theme:e})=>l(e,"colors.interactive.base.white")};
  }

  @media (min-width: ${p.md}) {
    top: ${s(2)};
    right: ${s(2)};
  }
`,b=i.div.withConfig({displayName:"LightboxSlidesWrapper"})`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  transition: transform 0.4s ease-in-out;
  height: 100%;

  &.listicle-variation-slide-wrapper {
    display: block;
  }
`,y=i.div.withConfig({displayName:"LightboxSlideTopSpacer"})``,f=i.div.withConfig({displayName:"LightboxSlideImageCaptionOuter"})``,C=i.div.withConfig({displayName:"LightboxSlideCaptionContainer"})``,v=i.div.withConfig({displayName:"LightboxSlideWrapper"})`
  background-color: ${({theme:e})=>l(e,"colors.consumption.lead.standard.background")};
  width: 100vw;

  &.listicle-variation-slide {
    background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
    padding: ${s(3)} ${s(9)};

    ${a} {
      margin-bottom: 0;
      background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
    }
  }

  ${a} {
    background-color: ${({theme:e})=>l(e,"colors.consumption.lead.standard.background")};
    text-align: initial;

    ${r} {
      ${({theme:e})=>d(e,"colors.consumption.lead.standard.description",null)}

      &:hover {
        text-decoration: none;
      }
    }
  }

  ${({screenOrientation:e})=>"landscape"===e||"portrait"===e||"square"===e?`\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: auto;\n\n    ${f} {\n      display: contents;\n    }\n\n    .responsive-image {\n      display: flex;\n      flex-direction: column;\n\n      ${g} {\n        max-height: 85vh;\n        object-fit: contain;\n      }\n    }\n\n    ${C} {\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-end;\n    }\n\n    ${a} {\n      margin: ${s(2)} ${s(2)} ${s(5)};\n    }\n\n    @media (min-width: ${p.md}) {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: ${s(4)};\n      height: initial;\n\n      ${y} {\n        display: none;\n      }\n\n      ${f} {\n        display: block;\n      }\n\n      .responsive-asset {\n        display: table-cell;\n      }\n\n      ${C} {\n        display: table-caption;\n        caption-side: bottom;\n      }\n\n      ${a} {\n        margin: 0;\n        margin-top: ${s(1)};\n      }\n    }\n\n    ${"portrait"===e?`\n      @media (min-width: ${p.lg}) {\n        display: flex;\n        flex-direction: row;\n        height: 100%;\n\n        ${y} {\n          display: none;\n        }\n\n        ${f} {\n          display: contents;\n        }\n\n        .responsive-asset {\n          display: flex;\n          height: 100%;\n\n          .responsive-image {\n            height: 100%;\n\n            ${g} {\n              height: 100%;\n              max-height: initial;\n            }\n          }\n        }\n\n        ${C} {\n          display: flex;\n          flex-direction: column;\n          align-self: flex-end;\n        }\n\n        ${a} {\n          margin: 0;\n          margin-bottom: ${s(6)};\n          margin-left: ${s(2)};\n          max-width: 180px;\n        }\n      }\n    `:""}\n  `:""}
`;e.exports={LightboxSwipe:m,LightboxCloseButtonIcon:h,LightboxSlideImageCaptionOuter:f,LightboxSlideCaptionContainer:C,LightboxWrapper:u,LightboxSlideTopSpacer:y,LightboxSlidesWrapper:b,LightboxSlideWrapper:v}},510:function(e,t,n){const i=n(1),o=n(0),{ContentHeaderBylines:a}=n(245),r=({bylineVariation:e,contributors:t})=>t&&0!==Object.keys(t).length?o.createElement(a,{contributors:t,bylineVariation:e,isCompact:!1}):null;r.propTypes={bylineVariation:i.string,contributors:i.object},e.exports=r},511:function(e,t,n){const i=n(1),o=n(0),{ContentHeaderTitleBlockPublishDate:a}=n(170),r=({hasExtraSpaceBetweenSeparator:e,hidePublishDate:t,publishDate:n})=>t||!n?null:o.createElement(a,{hasExtraSpaceBetweenSeparator:e,"data-testid":"ContentHeaderPublishDate"},n);r.propTypes={hasExtraSpaceBetweenSeparator:i.bool,hidePublishDate:i.bool,publishDate:i.string},e.exports=r},512:function(e,t,n){const i=n(1),o=n(0),a=n(1421),r=({hasCategoryEyebrow:e,tags:t,title:n})=>e&&(null==t?void 0:t.length)>0?o.createElement(a,{title:n,tags:t}):null;r.propTypes={hasCategoryEyebrow:i.bool,tags:i.array,title:i.string},e.exports=r},513:function(e,t){e.exports=e=>{if(!window)return{};const{bottom:t,left:n,right:i,top:o}=e.getBoundingClientRect(),a=e.currentStyle||window.getComputedStyle(e);return{bottom:t+parseFloat(a.marginBottom),left:n-parseFloat(a.marginLeft),right:i+parseFloat(a.marginRight),top:o-parseFloat(a.marginTop)}}},514:function(e,t,n){const i=n(1),o=n(0),{SponsorContentContainer:a,SponsorImage:r,SponsoredContent:s,SponsoredContentCampaignLink:l}=n(1429),d=n(11),c=({sponsorByline:e,sponsoredContentHeaderProps:t,theme:n})=>{const{sponsorLogo:i,sponsorName:d,campaignUrl:c}=t;if(!d||!e)return null;const p=`${e} ${d}`;return o.createElement(a,null,o.createElement(l,{additionalRelVals:["sponsored"],href:c},o.createElement(r,Object.assign({},i)),o.createElement(s,{containerTheme:n},p)))};c.propTypes={sponsorByline:i.string,sponsoredContentHeaderProps:i.shape({campaignUrl:i.string,sponsorLogo:i.shape(d.propTypes),sponsorName:i.string}),theme:i.oneOf(["standard","inverted","special"])},c.defaultProps={theme:"inverted"},e.exports=c},515:function(e,t,n){const{default:i,css:o}=n(3),{getColorToken:a,getTypographyStyles:r,calculateSpacing:s,maxScreen:l,minScreen:d}=n(4),{SocialIconsList:c}=n(25),{BREAKPOINTS:p}=n(6),{BaseText:g,BaseLink:u}=n(10),{SITE_HEADER_TOP_HEIGHT:m,SITE_HEADER_TOP_STICKY_HEIGHT_MD:h,SITE_HEADER_TOP_STICKY_HEIGHT_LG:b}=n(146),y=n(19),{GridItem:f}=n(27),{universalGridCore:C}=n(54),{applyGridSpacing:v}=n(17),S=n(11),w=i.header.withConfig({displayName:"TextOverlayWrapper"})`
  .responsive-clip {
    height: 100%;
  }
  overflow: hidden;
`,k=i.div.withConfig({displayName:"ImageWrapper"})`
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: ${({contentAlign:e})=>e};

  @media (orientation: landscape) {
    display: grid;
    min-height: 400px;
  }

  @media (max-width: ${p.md}) {
    display: grid;
    min-height: 667px;
  }

  @media (min-width: ${p.md}) {
    display: grid;
    height: calc(
      100vh - ${m} - ${h}
    );
  }

  @media (min-width: ${p.lg}) {
    display: grid;
    height: calc(
      100vh - ${m} - ${b}
    );
  }

  @media (min-width: ${p.xl}) {
    display: grid;
    min-height: 720px;
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${({background:e})=>"gradient"===e?"linear-gradient(to top, rgb(0, 0, 0) 0, transparent 65%)":"rgba(0, 0, 0, 0.65)"};
    content: '';
    pointer-events: none;
  }
`,x=i.div.withConfig({displayName:"Image"})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .responsive-asset {
    &::before {
      display: block;
      width: 100%;
      content: '';
    }
  }

  > *,
  picture,
  .responsive-asset picture, /* set to override the css specifity set on this component  */
  img {
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  }

  picture {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
`,$=i.div.withConfig({displayName:"ContentAlign"})`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({contentAlign:e})=>e};
  width: 100%;

  > .social-icons--footer {
    ${c} {
      @media (min-width: ${p.md}) {
        position: relative; /* for bookmark onboarding alert placement */
      }
    }
  }

  ${({socialIconsToHide:e})=>e&&`\n      ${l(p.lg)} {\n        ${(e=>e.map(e=>`\n        .social-icons__list-item--${e} {\n          display: none;\n        }\n    `).join("\n"))(e)}\n      }\n    `}

  ${({bottomSpacing:e})=>e&&"margin-bottom: "+s(e)}
`,T=i.div.withConfig({displayName:"Content"})`
  position: relative;
  z-index: 2;
`,E=i(g).withConfig({displayName:"Hed"})`
  text-align: ${({contentAlign:e})=>e};
  ${({isFeatured:e,theme:t})=>e&&o`
      ${r(t,"typography.definitions.consumptionEditorial.hed-feature")};
      line-height: 64px;
      letter-spacing: 0;
      font-size: 58px;
      font-weight: 300;
      ${d(p.lg)} {
        max-width: 100%;
        line-height: 116px;
        letter-spacing: 0;
        font-size: 96px;
      }
    `}
`;E.defaultProps={as:"h1",colorToken:"colors.consumption.lead.inverted.heading",topSpacing:2,typeIdentity:"typography.definitions.consumptionEditorial.hed-standard"};const N=i("div").withConfig({displayName:"DekAndCaption"})`
  ${C()}
  ${v("padding")}
  ${({isInverted:e,theme:t})=>e&&`\n      background: ${a(t,"colors.background.dark")};\n    `}
`,L=i.div.withConfig({displayName:"DekWrapper"})`
  grid-column: 1 / span 4;
  text-align: ${({contentAlign:e})=>e};

  @media (min-width: ${p.md}) {
    grid-column: 3 / span 8;
  }
`,I=i(g).withConfig({displayName:"Dek"})`
  ${({isInverted:e,theme:t})=>e&&`\n    color: ${a(t,"colors.consumption.lead.inverted.description")};\n    `}
  text-align: ${({contentAlign:e})=>e};
`;I.defaultProps={as:"p",bottomSpacing:4,colorToken:"colors.consumption.lead.standard.description",topSpacing:3,typeIdentity:"typography.definitions.consumptionEditorial.description-core"};const B=i(g).withConfig({displayName:"Figure"})`
  grid-column: 1 / span 4;
  text-align: ${({contentAlign:e})=>e};

  @media (min-width: ${p.md}) {
    grid-column: 1 / span 12;
  }
`;B.defaultProps={as:"figure",colorToken:"colors.consumption.lead.standard.description",topSpacing:2,typeIdentity:"typography.definitions.consumptionEditorial.description-embed"};const A=i.span.withConfig({displayName:"ContentDivider"})`
  display: block;
  margin-top: ${s(4)};
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme:e})=>a(e,"colors.consumption.lead.standard.accent")};
  width: 100px;
  ${({contentAlign:e})=>"center"===e&&`margin: ${s(4)} auto 0`}
`,P=i.div.withConfig({displayName:"ContributorImage"})`
  display: block;
  margin-top: ${s(4)};
  border-radius: 50%;
  min-width: 60px;
  max-width: 66px;
  min-height: 60px;
  max-height: 66px;
  overflow: hidden;
  ${({contentAlign:e})=>"center"===e&&`margin: ${s(4)} auto 0`}
`,D=i.div.withConfig({displayName:"Accreditation"})`
  ${({contentAlign:e})=>"center"===e?`margin: ${s(2)} auto`:`margin: ${s(2)} 0`}
`,R=i.time.withConfig({displayName:"PublishDate"})`
  ${({theme:e})=>r(e,"typography.definitions.globalEditorial.accreditation-core")}
  display: block;
  margin: ${s(1)} 0 ${s(4)};
  text-align: ${({contentAlign:e})=>e};
  color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.context-tertiary")};
`,M=i(y.WithMargins).withConfig({displayName:"ContentGrid"})`
  > ${f} {
    grid-column: 1 / span 4;
    margin-bottom: 4.5rem;
    @media (min-width: ${p.md}) {
      grid-column: ${({contentAlign:e})=>"left"===e?"1 / span 10":"2 / span 10"};
    }
  }
`,O=i(S).withConfig({displayName:"TextOverlayLogoImage"})`
  grid-column: 1 / span 4;

  img {
    max-width: 100%;
    height: 100px;
    vertical-align: bottom;
  }
`,H=i(u).withConfig({displayName:"TextOverlayLogoLink"})`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${s(2)};

  @media (max-width: ${p.md}) {
    padding-right: calc(1 * ${s(3)});
    padding-left: calc(1 * ${s(3)});
  }
`,_=i.div.withConfig({displayName:"TextOverlayLogo"})`
  margin: auto;
  margin-top: 1.5rem;
`;e.exports={TextOverlayLogo:_,TextOverlayLogoLink:H,TextOverlayLogoImage:O,TextOverlayWrapper:w,ImageWrapper:k,Image:x,ContentAlign:$,Content:T,Hed:E,DekAndCaption:N,DekWrapper:L,Dek:I,Figure:B,ContentDivider:A,ContributorImage:P,Accreditation:D,PublishDate:R,ContentGrid:M}},516:function(e,t,n){const{default:i}=n(3),{BaseText:o}=n(10),{calculateSpacing:a,getColorToken:r,getTypographyStyles:s}=n(4),l=i.div.withConfig({displayName:"ScoreBoxWrapper"})`
  position: relative;
  width: 130px;
`,d=i.div.withConfig({displayName:"ScoreCircle"})`
  position: relative;
  margin-bottom: ${a(2)};
  border: 7px solid
    ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  border-radius: 50%;
  padding-bottom: ${a(2)};
  width: 134px;
  height: 134px;
  text-align: center;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
`,c=i(o).withConfig({displayName:"Rating"})`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  ${s("typography.definitions.globalEditorial.numerical-large")};
`,p=i(o).withConfig({displayName:"BestNewMusicText"})`
  ${s("typography.definitions.globalEditorial.context-primary")};
  width: 134px;
  text-align: center;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
`,g=i.svg.withConfig({displayName:"SvgStyle"})`
  margin-bottom: ${a(2,"px")};
  margin-left: ${a(3,"px")};
  width: 86px;
  height: 26px;
`,u=i.div.withConfig({displayName:"SvgWrapper"})`
  svg {
    fill: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  }
  line-height: 0em;
`;e.exports={BestNewMusicText:p,Rating:c,ScoreBoxWrapper:l,ScoreCircle:d,SvgStyle:g,SvgWrapper:u}},81:function(e,t,n){const{asConfiguredComponent:i}=n(9),o=n(147);e.exports=i(o,"BasePage")}});