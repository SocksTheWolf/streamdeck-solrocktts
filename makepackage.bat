@echo off
mkdir Release
del /Q Release
DistributionTool.exe -b -i com.mmattdonk.solrock.sdPlugin -o Release
@echo on