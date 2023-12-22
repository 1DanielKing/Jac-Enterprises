package org.wecancodeit.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.backend.models.MetModel;
import org.wecancodeit.backend.services.MetService;

@RestController
@RequestMapping("/api")
public class MetController {
    private final MetService metService;

    public MetController(MetService metService) {
        this.metService = metService;
    }

    @GetMapping("/arts")
    public MetModel getMetData() {
        MetModel metModel = metService.fetchMetArtData();

        return metModel;
    }
}
