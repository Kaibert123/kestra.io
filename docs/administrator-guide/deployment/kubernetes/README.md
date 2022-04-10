---
order: 2
---
# Deployment on Kubernetes

The recommended deployment environment for **production** workloads is [Kubernetes](http://kubernetes.io/).
We provide a [Helm Chart](https://helm.sh/) in order to deploy your cluster.

- The chart repository is available [here](https://helm.kestra.io/).
- The source code of the charts is found [here](https://github.com/kestra-io/helm-charts).

## Quick Start

```bash
helm repo add kestra https://helm.kestra.io/
helm install kestra --set kafka.enabled=true --set elasticsearch.enabled=true --set minio.enabled=true kestra/kestra
```

## Details
You can change the default behaviour and configuring your cluster changing the [defaults values](https://github.com/kestra-io/helm-charts/blob/master/charts/kestra/values.yaml).

By default, charts will only deploy kestra service with only 1 replica for each [servers](../../../architecture).

You can also deploy the standalone servers (not for production) which will host all kestra servers in only one pod, using these values:
```yaml
kestra:
  deployments:
    webserver:
      enabled: false
    executor:
      enabled: false
    indexer:
      enabled: false
    scheduler:
      enabled: false
    worker:
      enabled: false
    standalone:
      enabled: true
```

The charts could also deploy all needed services:
- Zookeeper using `kafka.enabled: true`
- Kafka cluster using `kafka.enabled: true`
- Elasticsearch cluster using `elasticsearch.enabled: true`
- Minio standalone using `minio.enabled: true`

::: warning
All services (kafka, elasticsearch, zookeeper, minio) are deployed using unsecured configurations (no authentification, no tls, ...). When installing for a production environnement, you **need** to secure all these services and adapt all service configurations to be production ready.
:::

The most important values to adapt are the [configuration files](../../configuration), including the following values:
- `configuration`: used to apply the entire configuration files from Kestra
- `secrets`: this will be merged with `configuration` but kept as secret on your k8s cluster.


