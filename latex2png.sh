#!/bin/sh

echo "\documentclass[varwidth]{standalone}

\begin{document}
\$\$$1\$\$
\end{document}" > main.tex

latex main.tex

dvipng main.dvi -D 1000

magick main1.png -bordercolor white -border 30 main1.png 
