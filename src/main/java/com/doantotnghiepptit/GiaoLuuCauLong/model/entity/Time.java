package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "time")
public class Time {
    @Id
    private Long id;
    private LocalDateTime startAt;
    private LocalDateTime endAt;
    private String dayOfWeek;
    private Double price;
    private Boolean isEmpty;

    @ManyToOne
    @JoinColumn(name = "complex_id")
    private Complex complex;
}
