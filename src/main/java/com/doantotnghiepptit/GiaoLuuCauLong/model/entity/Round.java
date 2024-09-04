package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "round")
public class Round {
    @Id
    private Long id;
    private String name;
    private Integer roundNo;
    private LocalDateTime createAt;

    @ManyToOne
    @JoinTable(name = "tour_id")
    private Tourments tour;
}
