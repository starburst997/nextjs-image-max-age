Demonstrating a bug in Safari iOS using Next JS Image Optimizer

Initialy from this [issue](https://github.com/vercel/next.js/issues/19914)

See it in action [here](https://nextjs-image-max-age.vercel.app/) on your browser

The original PR is [here](https://github.com/starburst997/next.js/pull/1)

**As I was submitting this issue / PR, it seems like Vercel Cache Header were changed and now correctly honor the max-age**

It still does not correctly honor the max-age in custom server tho, so might still be considered a bug, but for my use-case I wanted the Image Optimizer to honor max-age on Vercel and it does so I will not investigate further

*This can be disregard*

![Video](video.gif?raw=true "Video of the Bug")
