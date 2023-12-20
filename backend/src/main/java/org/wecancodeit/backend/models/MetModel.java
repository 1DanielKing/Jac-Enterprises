package org.wecancodeit.backend.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MetModel {
    
    @JsonProperty("objectID")
    protected long artId;

    @JsonProperty("primaryImage")
    protected String image;
    
    @JsonProperty("title")
    protected String title;

    @JsonProperty("culture")
    protected String culture;

    @JsonProperty("period")
    protected String period;

    @JsonProperty("objectDate")
    protected String date;

    @JsonProperty("artistDisplayName")
    protected String artist;

    @JsonProperty("artistDisplayBio")
    protected String artistInfo;

    public MetModel() {
    }

    public MetModel(String image, String moreImages, String title, String culture, String period, String date,
            String artist, String artistInfo) {
        this.image = image;
        this.title = title;
        this.culture = culture;
        this.period = period;
        this.date = date;
        this.artist = artist;
        this.artistInfo = artistInfo;
    }

    public long getArtId() {
        return artId;
    }

    public void setArtId(long artId) {
        this.artId = artId;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCulture() {
        return culture;
    }

    public void setCulture(String culture) {
        this.culture = culture;
    }

    public String getPeriod() {
        return period;
    }

    public void setPeriod(String period) {
        this.period = period;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public String getArtistInfo() {
        return artistInfo;
    }

    public void setArtistInfo(String artistInfo) {
        this.artistInfo = artistInfo;
    }

    
}
