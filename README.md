# Dog Breeds

## Overview:
This is a web application that allows users to search for their favorite breed of dogs.

API reference: https://dog.ceo/dog-api/documentation/

Search mechanism:

You must enter at least one valid breed in the search input for a successful lookup. For example, "Boxer", "Hound", etc...
If you enter two valid breeds, the lookup will be performed on the first valid breed. For example, if you enter "Hound Boxer", then the lookup will be preformed on "Hound" and not the "Boxer" breed.
If you enter a valid breed and its sub-breed(i.e "bullterrier staffordshire"), then sub-breed will be ignored and the lookup will be performed on the breed only.
Favorite mechanism:

You can choose your favorite dog by clicking on the white heart icon which is placed on the dog image(bottom-right), and it will be automatically stored under the "Favorite" section.
To unfavorite a dog picture, you can either click on the red heart icon(of the picture you would like to unfavorite) in the "Favorite" section or the click on the heart icon in the display section.
Your favorite dog picture will be lost(meaning they will be removed from the "Favorite section") if you lookup for another breed of dogs.

![](src/assets/icons/dog-breeds.png)

## Requirements:

You need your node version to be >= v10. Preferably `v10.15.3`

You need your npm version to be >= 6.4.1. Preferably `6.4.1`

## Getting Started:

First, clone or download:

```bash
$ git clone https://github.com/Zoghayyer/dog-breads.git
```
Second, install the project's dependencies using npm

```bash
$ cd dog-breeds
$ yarn install
```
Provided that the dependencies have installed without any errors you can now run the project:

Fourth, Start the Webpack development server
```bash
$ yarn start
```

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
