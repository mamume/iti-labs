FROM httpd:latest
LABEL maintainer="mamume"
RUN apt update 
RUN apt install -y --no-install-recommends apt-utils
RUN apt -y install python3
COPY shell-script/hello.py /usr/local/apache2/cgi-bin
COPY shell-script/httpd.conf /usr/local/apache2/conf/httpd.conf
RUN chmod +x /usr/local/apache2/cgi-bin/hello.py
