package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "tour_schedules")
public class TourSchedules {
    @Id
    private Long id;
    private Integer matchNo;
    private LocalDateTime startAt;
    private LocalDateTime createAt;
    private Integer courtNo;

    @ManyToOne
    @JoinColumn(name = "tour_id")
    private Tourments tour;
}
