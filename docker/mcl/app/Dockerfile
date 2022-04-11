FROM node:17.4

RUN apt update \
	&& apt install -y dos2unix \
	&& npm install --global nodemon\
	&& mkdir -p /app \
	&& mkdir -p /scripts-docker \
  && mkdir -p /docker


# RUN useradd -u 3000 -G sudo -m innovait \
# 	&& echo "innovait:secret" | chpasswd

RUN apt update \
	&& apt install -y dos2unix vim \
  && npm install -g @quasar/cli @vue/cli \
  && rm -rf /var/lib/apt/lists/*




# USER ENVIRONMENT
COPY [".bash_aliases", ".bash_prompt" ,".bash_extra","/root/"]



RUN mkdir /scripts \
	&& mkdir -p /data \
	&& mkdir -p /app/public

COPY ["init_container.sh",".bashrc","/scripts-docker/"]

WORKDIR /scripts-docker
# # Windows compatibility
RUN dos2unix /scripts-docker/init_container.sh \
	&&  dos2unix /scripts-docker/.bashrc \
	&&  dos2unix /root/.bash_aliases \
	&&  dos2unix /root/.bash_prompt \
	&&  dos2unix /root/.bash_extra \
	&& chmod +x init_container.sh

# # USER innovait


EXPOSE 80 443
WORKDIR /app
