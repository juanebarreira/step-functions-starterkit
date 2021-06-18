# step-functions-starterkit (JS)

Starterkit per la creazione di un workflow che utilizzi le step functions. Per realizzarlo sono stati usati nodejs e serverless framework.

# Cosa comprende

* suite di unit test
* suite di linting
* file di configurazione per integrazione con backstage
* file serverless.yml per la dichiarazione delle step functions che è possibile deployare su AWS

# Come lavorare in locale

Crea il file .env e inserisci i dati necessari

```
cp .env.template .env
```

Per eseguire il tutto in locale:

```
make
```

al momento purtroppo non è ancora completamente supportato l'utilizzo delle step functions offline. Ma se si controllano il logs del container è possibile vedere che la state machine per le step functions viene creata correttamente.

# Accedere al container una volta che è up

```
make cli
```

# Eseguire i test

```
make unit-test
```

# Eseguire il linting del codice

```
make lint
```

# Deploy stage

```
make stage-deploy
```
