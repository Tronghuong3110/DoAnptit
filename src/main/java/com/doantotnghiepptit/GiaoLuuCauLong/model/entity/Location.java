package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "location")
public class Location {
    @Id
    private Long id;
    private String village;
    private String city;
    private String country;
    private String houseNumber;
    private String district;
    private String commune;
    private Double latitude;
    private Double longitude;
}
