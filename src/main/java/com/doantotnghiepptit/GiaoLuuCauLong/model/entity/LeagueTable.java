package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "league_table")
public class LeagueTable {
    @Id
    private Long id;
    private String name;
    private LocalDateTime createAt;

    @ManyToOne
    @JoinColumn(name = "tour_id")
    private Tourments tour;
}
