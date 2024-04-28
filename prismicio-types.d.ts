// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client"

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

type PageDocumentDataSlicesSlice = TripsSlice | FeatureSlice | HeroSlice

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>

/**
 * Item in *Site Settings → Navigation Links*
 */
export interface SiteSettingsDocumentDataNavigationLinksItem {
  /**
   * Label field in *Site Settings → Navigation Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: site_settings.navigation_links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField

  /**
   * Path field in *Site Settings → Navigation Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: site_settings.navigation_links[].path
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  path: prismic.LinkField
}

/**
 * Content for Site Settings documents
 */
interface SiteSettingsDocumentData {
  /**
   * Navigation Links field in *Site Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: site_settings.navigation_links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation_links: prismic.GroupField<
    Simplify<SiteSettingsDocumentDataNavigationLinksItem>
  >

  /**
   * Footer Description field in *Site Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: site_settings.footer_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  footer_description: prismic.KeyTextField

  /**
   * Instagram Profile field in *Site Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: site_settings.instagram
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  instagram: prismic.LinkField

  /**
   * LinkedIn Profile field in *Site Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: site_settings.linkedin
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linkedin: prismic.LinkField

  /**
   * Twitter Profile field in *Site Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: site_settings.twitter
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  twitter: prismic.LinkField

  /**
   * Mailing List Heading field in *Site Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: site_settings.mailing_list_heading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  mailing_list_heading: prismic.KeyTextField

  /**
   * Mailing List Sub Heading field in *Site Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: site_settings.mailing_list_sub_heading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  mailing_list_sub_heading: prismic.KeyTextField

  /**
   * Mailing List Call to Action field in *Site Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: site_settings.mailing_list_call_to_action
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  mailing_list_call_to_action: prismic.KeyTextField /**
   * Meta Title field in *Site Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: site_settings.meta_title
   * - **Tab**: SEO Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField

  /**
   * Meta Description field in *Site Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: site_settings.meta_description
   * - **Tab**: SEO Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *Site Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: site_settings.meta_image
   * - **Tab**: SEO Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>
}

/**
 * Site Settings document from Prismic
 *
 * - **API ID**: `site_settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SiteSettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SiteSettingsDocumentData>,
    "site_settings",
    Lang
  >

/**
 * Content for Trip documents
 */
interface TripDocumentData {
  /**
   * Cover Image field in *Trip*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: trip.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>

  /**
   * Name field in *Trip*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trip.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField

  /**
   * From Date field in *Trip*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: trip.fromDate
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  fromDate: prismic.DateField

  /**
   * To Date field in *Trip*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: trip.toDate
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  toDate: prismic.DateField

  /**
   * Duration field in *Trip*
   *
   * - **Field Type**: Text
   * - **Placeholder**: x days / x nights
   * - **API ID Path**: trip.duration
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  duration: prismic.KeyTextField

  /**
   * Call to Action field in *Trip*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trip.cta
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta: prismic.KeyTextField

  /**
   * Brochure PDF field in *Trip*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: trip.brochure_pdf
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  brochure_pdf: prismic.LinkToMediaField
}

/**
 * Trip document from Prismic
 *
 * - **API ID**: `trip`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TripDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<TripDocumentData>, "trip", Lang>

export type AllDocumentTypes =
  | PageDocument
  | SiteSettingsDocument
  | TripDocument

/**
 * Primary content in *Features → Primary*
 */
export interface FeatureSliceDefaultPrimary {
  /**
   * Sub Heading field in *Features → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.sub_heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sub_heading: prismic.TitleField

  /**
   * Heading field in *Features → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField

  /**
   * Description field in *Features → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Optional
   * - **API ID Path**: feature.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField
}

/**
 * Primary content in *Features → Items*
 */
export interface FeatureSliceDefaultItem {
  /**
   * Icon field in *Features → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Copy the icon name from https://lucide.dev
   * - **API ID Path**: feature.items[].icon
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  icon: prismic.KeyTextField

  /**
   * title field in *Features → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * description field in *Features → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.items[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField
}

/**
 * Default variation for Features Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeatureSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeatureSliceDefaultPrimary>,
  Simplify<FeatureSliceDefaultItem>
>

/**
 * Slice variation for *Features*
 */
type FeatureSliceVariation = FeatureSliceDefault

/**
 * Features Shared Slice
 *
 * - **API ID**: `feature`
 * - **Description**: Feature
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeatureSlice = prismic.SharedSlice<"feature", FeatureSliceVariation>

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Sub Heading field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading: prismic.TitleField

  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField

  /**
   * Body Text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField
}

/**
 * Minimal variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceWithImagePrimary {
  /**
   * Sub Heading field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading: prismic.TitleField

  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField

  /**
   * Body Text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField

  /**
   * Call to Action - Button Label field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.cta_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label: prismic.KeyTextField

  /**
   * Call to Action - Button Link field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.cta_link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_link: prismic.KeyTextField

  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>
}

/**
 * With Image Right variation for Hero Slice
 *
 * - **API ID**: `withImage`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceWithImage = prismic.SharedSliceVariation<
  "withImage",
  Simplify<HeroSliceWithImagePrimary>,
  never
>

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceWithImageBottomPrimary {
  /**
   * Sub Heading field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading: prismic.TitleField

  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField

  /**
   * Body Text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField

  /**
   * Image Left field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image_left
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_left: prismic.ImageField<never>

  /**
   * Image Right field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image_right
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_right: prismic.ImageField<never>
}

/**
 * With Images Bottom variation for Hero Slice
 *
 * - **API ID**: `withImageBottom`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceWithImageBottom = prismic.SharedSliceVariation<
  "withImageBottom",
  Simplify<HeroSliceWithImageBottomPrimary>,
  never
>

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceContactFormPrimary {
  /**
   * Sub Heading field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading: prismic.TitleField

  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField

  /**
   * Body Text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField

  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>
}

/**
 * Contact Form variation for Hero Slice
 *
 * - **API ID**: `contactForm`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceContactForm = prismic.SharedSliceVariation<
  "contactForm",
  Simplify<HeroSliceContactFormPrimary>,
  never
>

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation =
  | HeroSliceDefault
  | HeroSliceWithImage
  | HeroSliceWithImageBottom
  | HeroSliceContactForm

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>

/**
 * Primary content in *Trips → Primary*
 */
export interface TripsSliceDefaultPrimary {
  /**
   * Sub Heading field in *Trips → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: trips.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading: prismic.TitleField

  /**
   * Heading field in *Trips → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: trips.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField

  /**
   * Description field in *Trips → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Optional
   * - **API ID Path**: trips.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField
}

/**
 * Default variation for Trips Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TripsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TripsSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *Trips*
 */
type TripsSliceVariation = TripsSliceDefault

/**
 * Trips Shared Slice
 *
 * - **API ID**: `trips`
 * - **Description**: Trips
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TripsSlice = prismic.SharedSlice<"trips", TripsSliceVariation>

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>
  }

  namespace Content {
    export type {
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SiteSettingsDocument,
      SiteSettingsDocumentData,
      SiteSettingsDocumentDataNavigationLinksItem,
      TripDocument,
      TripDocumentData,
      AllDocumentTypes,
      FeatureSlice,
      FeatureSliceDefaultPrimary,
      FeatureSliceDefaultItem,
      FeatureSliceVariation,
      FeatureSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceWithImagePrimary,
      HeroSliceWithImageBottomPrimary,
      HeroSliceContactFormPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceWithImage,
      HeroSliceWithImageBottom,
      HeroSliceContactForm,
      TripsSlice,
      TripsSliceDefaultPrimary,
      TripsSliceVariation,
      TripsSliceDefault,
    }
  }
}
