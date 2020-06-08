# React Hooks exercise

The goal of this exercise is to learn how to fetch REST data using useEffect hook
and display it using Material UI
https://codesandbox.io/s/react-mui-list-of-countries-281zv

1. Fetch countries using:
   1.1) fetch URL http://restcountries.eu/rest/v2/all?fields=name
   1.2) use only functional component and useEffect() hook
   1.3) use useState to save list of countries
   1.4) Display countries using HTML list (ul, li)
2. import Material UI to show countries in a dropdown
   2.1) change fetch URL to http://restcountries.eu/rest/v2/all?fields
   2.2) use alpha2Code as a value
   2.3) use name as a label
3. List three countries in the dropdown using same MUI dropdown:
   3.1) Estonia
   3.2) Latvia
   3.3) Lithuania
4. EXTRA CREDIT: add second useEffect with dependency on _selectedCountry_
   4.1) Add a div with text under the countries dropdown
   4.2) make it so what whenever you select a country, that country is
   shown below the dropdown
   4.3) to do that you need to watch dropdown's selected value which should be
   copied to _selectedCountry_

if you need help, use Google, or maybe these pages will help:
https://www.rithmschool.com/blog/react-hooks-use-effect
https://material-ui.com/components/selects/
