package org.wecancodeit.backend.services;

import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.wecancodeit.backend.models.MetModel;
import java.util.Random;

@Service
public class MetService {
    final Random random = new Random();
    int min = 1;
    int max = 400000;

    private final String apiUrl = "https://collectionapi.metmuseum.org/public/collection/v1/objects";

    private final RestTemplate restTemplate;

    public MetService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public MetModel fetchMetArtData() {
        long artId = min + random.nextInt(max - min);
        artId = 115803;
        while (true) {
            try {
                return restTemplate.getForObject(apiUrl + "/" + artId, MetModel.class);
            } catch (HttpClientErrorException e) {
                System.out.println("Error no data found at ID: " + artId + ". Error: " + e.getStatusText());
                artId++;
            } catch (RestClientException er) {
                System.out.println(er.getMessage());
                artId++;
            }
        }
    }
}