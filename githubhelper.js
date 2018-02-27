#!/usr/bin/env node

const request = require('./request');
const comandos = require('commander');

comandos
  .version('1.0.0')
  .description('Buscar repositorios do Github');

  comandos
    .command('repositorios do <user>')
    .alias('r')
    .description('Buscar repositorios de um usuário')
    .action(async (user) => {
      try{
        let repos = await request.buscarRepositoriosDo('vmussak');

        repos.map((repo) => {
          console.info(repo.name);
        });

      } catch (error) {
          console.error(error);
      }
    });

comandos.parse(process.argv);
