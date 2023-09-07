#!/bin/bash

# ask for the new component name

echo "Enter the new component name:"

read componentName

# define source directory

srcDir="src/components/templateX"

# create new directory based on the component name

newDir="src/components/$componentName"

cp -r "$srcDir" "$newDir"

# loop over the files in the new directory, rename files and replace content

for file in $(find $newDir -name '*templateX*'); do

    # rename files

    renamedFile=$(echo $file | sed "s/templateX/$componentName/g")

    mv $file $renamedFile

    # replace content in files
    ComponentName="$(tr a-z A-Z <<< ${componentName:0:1})${componentName:1}"

    sed -i '' "s/templateX/$componentName/g" $renamedFile
    sed -i '' "s/TemplateX/$ComponentName/g" $renamedFile

done

echo "New component $componentName created successfully."
