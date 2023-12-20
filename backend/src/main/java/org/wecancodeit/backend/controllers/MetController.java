package org.wecancodeit.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.backend.models.MetModel;
import org.wecancodeit.backend.services.MetService;

@RestController
public class MetController {
    private final MetService metService;

    public MetController(MetService metService) {
        this.metService = metService;
    }

    @GetMapping("/arts")
    public MetModel getMetData() {
        MetModel metModel = metService.fetchMetArtData();

        // MetModel metResponse = new MetModel();
        // metResponse.setImage(metModel.getImage());
        // metResponse.setMoreImages((metModel.getMoreImages()));
        // metResponse.setTitle(metModel.getTitle());
        // metResponse.setDate(metModel.getDate());
        // metResponse.setCulture(metModel.getCulture());
        // metResponse.setPeriod(metModel.getPeriod());
        // metResponse.setArtist(metModel.getArtist());
        // metResponse.setArtistInfo(metModel.getArtistInfo());

        return metModel;
    }
}
