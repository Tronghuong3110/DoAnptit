package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Table(name = "complex")
@Entity
public class Complex {
    @Id
    private Long id;
    private String name;
    private Integer quantityCourts;
    private String carpetColor;
    @Column(name = "description", columnDefinition = "text")
    private String description;

    @ManyToOne
    @JoinColumn(name = "location_id")
    private Location location;
}
