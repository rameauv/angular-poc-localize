# I18n

## Angular-localize

Shortcomings:

- Lot of boilerplate code
- Each time the lang change all the components have to be re instantiated, which is not the case for transloco. It might not impact performances though because the language will probably not change frequently.
- It’s not possible to use the “i18n” attribute (only $localize)


## Xi18n

- Renamed to extract-i18n
- It’s not possible to use this tool with transloco, but a similar tool exist for using with transloco https://github.com/ngneat/transloco-keys-manager
- It detect the use of $localize or the attribute “i18n” to automatically generate a translation file.


## XLIFF

Xliff can be usefully when using a translation company to have to translations be done. Overkill for us
