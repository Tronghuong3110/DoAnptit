package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "tour_registration")
public class TourRegistration {
    @Id
    private Long id;
    private Boolean status;
    private LocalDateTime modifiedAt;
    private LocalDateTime registerAt;

    @ManyToOne
    @JoinColumn(name = "tour_id")
    private Tourments tour;
}
