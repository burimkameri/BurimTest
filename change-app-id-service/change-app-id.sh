#!/bin/bash

unsquashfs -v
mksquashfs -version

appfile=$1
newid=$2
currtime=$(($(date +%s%N)/1000000))
tmppath="/tmp/"$appfile"_"$currtime
newappfile=$currtime"_"$appfile

echo $tmppath
echo $newappfile

unsquashfs -d $tmppath $1

sed -i 's/"identifier": ".*"/"identifier": "'$newid'"/g' $tmppath/app_info.json

mksquashfs $tmppath /tmp/$newappfile

ls -l /tmp/$newappfile

